const Products = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Products</h2>
    <p className="text-gray-600 mb-6">Here is a list of your available products.</p>

    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* Sample product cards */}
      {[1, 2, 3].map((id) => (
        <div key={id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Product {id}</h3>
          <p className="text-gray-500">Short description of the product.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
