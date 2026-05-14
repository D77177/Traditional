export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Traditional Store</h1>

      <div className="flex gap-4">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}