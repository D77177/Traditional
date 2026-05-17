"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.bing.com/images/search?view=detailV2&ccid=DKdZlIrz&id=14CF43B8A5AEE01E824FC229A3FE7A7582224315&thid=OIP.DKdZlIrz1VlDIJkwRZODzQHaI-&mediaurl=https%3a%2f%2fethiopiantraditionaldress.com%2fwp-content%2fuploads%2f2022%2f12%2fBurgendy-Crowning-Kaba-Set-2-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0ca759948af3d55943209930459383cd%3frik%3dFUMignV6%252fqMpwg%26pid%3dImgRaw%26r%3d0&exph=873&expw=720&q=ethiopian+traditional+dress&FORM=IRPRST&ck=E27798FEF6F13B5770EB6DD58E5CC9AD&selectedIndex=3&itb=0')",
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
          Timeless Ethiopian Traditional Fashion Design To Satisfy
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