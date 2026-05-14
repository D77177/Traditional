export const dynamic = "force-dynamic";
import AuthGuard from "@/components/AuthGuard";
import ProductForm from "@/components/ProductForm";

export default function AdminPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <ProductForm />
      </div>
    </AuthGuard>
  );
}