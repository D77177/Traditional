import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const phoneNumber = "251901958670";

  const message = `Hello, I'm interested in ${product.name}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-white">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {product.description}
        </p>

        <p className="mt-3 font-bold text-lg">
          {product.price}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          className="block mt-5 bg-green-500 text-white text-center py-3 rounded-xl hover:bg-green-600 transition"
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}