const Settings = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>
      <div className="bg-white shadow-md rounded p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Store Name</label>
          <input
            type="text"
            defaultValue="My Online Store"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            defaultValue="admin@store.com"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
  
  export default Settings;
  