const AddProduct = () => (
  <div className="max-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h2>
    <form className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">Product Name</label>
        <input
          type="text"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Price</label>
        <input
          type="number"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          placeholder="Enter price"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Description</label>
        <textarea
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          rows="3"
          placeholder="Enter description"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Add Product
      </button>
    </form>
  </div>
);

export default AddProduct;
