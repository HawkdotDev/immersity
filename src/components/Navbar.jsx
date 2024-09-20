import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center flex-shrink-0">
            <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Immersity</span>
          </Link>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* {console.log(item)} */}
                <Link to={item.label}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/signin"
              className="py-2 px-3 border border-emerald-400 rounded-md hover:bg-purple-600 hover:text-black"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-3 rounded-md hover:bg-blue-500 hover:text-black text-gray-200 border border-pink-600"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full px-12 pb-8 flex flex-col justify-center items-center lg:hidden backdrop-blur-lg border-b border-neutral-700/80">
            <ul className="w-screen text-center mb-3">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 w-full hover:bg-gray-700/40">
                  <Link to={item.label}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/signin" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
