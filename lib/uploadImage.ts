export const uploadImage = async (file: File) => {
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "unsigned_upload");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  return data.secure_url;
};