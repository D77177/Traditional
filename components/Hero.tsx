"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Timeless Ethiopian Traditional Fashion
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Elegant designs. Cultural heritage. Modern style.
        </p>

        <a
          href="#products"
          className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Explore Collection
        </a>
      </motion.div>
    </section>
  );
}