"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            No products yet.
          </p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
    </section>
  );
}