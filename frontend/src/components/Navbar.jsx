import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ role, onLogout }) => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <Link to="/">Subscriptify</Link>
      </h1>

      {/* Menu */}
      <div className="flex space-x-6">
        {role === "user" && (
          <>
            <Link to="/plans" className="hover:underline">
              Plans
            </Link>
            <Link to="/my-subscriptions" className="hover:underline">
              My Subscriptions
            </Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/manage-plans" className="hover:underline">
              Manage Plans
            </Link>
            <Link to="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </>
        )}

        {!role && (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}

        {/* Logout Button (only if logged in) */}
        {role && (
          <button
            onClick={onLogout}
            className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
