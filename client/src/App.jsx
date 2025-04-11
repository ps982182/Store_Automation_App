// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Lazy-loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="p-6 flex-1 overflow-auto bg-gray-50">
            <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<div className="text-red-500">Page Not Found</div>} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
