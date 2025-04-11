const Dashboard = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
    <p className="text-gray-600 mb-6">
      Quick overview of your store's activity will be shown here.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
        <p className="text-2xl text-blue-600 font-bold">$12,345</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">New Orders</h3>
        <p className="text-2xl text-green-600 font-bold">89</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Pending Shipments</h3>
        <p className="text-2xl text-yellow-600 font-bold">12</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
