"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white border rounded-xl w-80">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}