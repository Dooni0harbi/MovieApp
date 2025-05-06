
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RSavatar from "../assets/RSavatar.png";
import { AuthContext } from "../context/AuthContext";
import Switch from "./Switch";

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  useEffect(() => {
    console.log("currentUser:", currentUser);
  }, [currentUser]);


  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-neutral-100 dark:bg-gray-900 shadow-lg">
  <nav className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 px-6 shadow-lg fixed top-0 z-20 dark:text-neutral-200">
        <Link className="text-2xl font-semibold" to="/">
     <h1> React Movie App</h1>
    </Link>
  
    <div className="flex items-center gap-4" ref={menuRef}>
      <Switch />

      {currentUser && (
        <span className="text-sm capitalize text-gray-800 dark:text-neutral-200">
          Hello, {currentUser.displayName}
        </span>
      )}

      <div className="relative">
        <button
          onClick={toggleMenu}
          aria-label="User Menu"
          className="focus:outline-none"
        >
          <img
            src={currentUser?.photoURL || RSavatar}
            alt="User avatar"
            className="h-8 w-8 rounded-full cursor-pointer object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </button>

        {menuOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-700 border rounded-lg shadow-lg z-50">
            {currentUser ? (
              <li
                onClick={() => {
                  logOut();
                  setMenuOpen(false);
                }}
                className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/30 cursor-pointer"
              >
                Logout
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/30"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/30"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  </nav>
  {/* Adjust spacer height to match new navbar height */}
  <div className="h-[12px]"></div>
</header>
  );};
export default Navbar;
