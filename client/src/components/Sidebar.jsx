import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass =
    "block px-4 py-2 rounded hover:bg-blue-100 transition text-gray-700";
  const activeClass = "bg-blue-500 text-white";

  return (
    <aside className="w-64 bg-gray-50 border-r p-4">
      <nav className="space-y-2">
        <NavLink to="/" end className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ""}`}>
          Dashboard
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ""}`}>
          Products
        </NavLink>
        <NavLink to="/add-product" className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ""}`}>
          Add Product
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ""}`}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
