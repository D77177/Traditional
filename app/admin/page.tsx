"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] =
    useState("");

  const [image, setImage] = useState<File | null>(
    null
  );

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      if (!image) {
        alert("Please select an image");
        return;
      }

      setLoading(true);

      // CLOUDINARY UPLOAD
      const formData = new FormData();

      formData.append("file", image);

      formData.append(
        "upload_preset",
        "YOUR_UPLOAD_PRESET"
      );

      const cloudName =
        process.env
          .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${dhsca0ieo}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      const imageUrl = data.secure_url;

      // FIRESTORE SAVE
      await addDoc(collection(db, "products"), {
        name,
        price,
        description,
        imageUrl,
        createdAt: Date.now(),
      });

      alert("Product uploaded!");

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border p-3 rounded-xl h-32"
          />

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImage(e.target.files[0]);
              }
            }}
            className="w-full"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            {loading
              ? "Uploading..."
              : "Upload Product"}
          </button>
        </div>
      </div>
    </div>
  );
}