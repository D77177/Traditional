import AuthGuard from "@/components/AuthGuard";
import ProductForm from "@/components/ProductForm";

export default function AdminPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-10">
            Admin Dashboard
          </h1>

          <ProductForm />
        </div>
      </div>
    </AuthGuard>
  );
}