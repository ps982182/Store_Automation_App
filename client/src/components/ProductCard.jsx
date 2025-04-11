function ProductCard({ product }) {
    return (
      <div className="border rounded shadow-sm p-4 w-full max-w-xs">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600">Category: {product.category}</p>
        <p className="text-sm">Price: ₹{product.price}</p>
        <p className="text-sm">Quantity: {product.quantity}</p>
        <div className="mt-3 flex gap-2">
          <button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">
            Edit
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  