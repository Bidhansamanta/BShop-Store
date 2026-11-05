import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-around items-center shadow-md min-h-15 py-4 px-4 gap-4 md:gap-2 sticky top-0 z-50 bg-white">
        <h1 className="text-3xl font-bold text-red-900">
          B<span className="text-black">Shop</span>
        </h1>

        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-6 lg:gap-10 uppercase font-bold text-sm sm:text-base">
            <li className="cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Product
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/addtocard"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Add To Card
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-3 sm:gap-5">
          <button className="text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 rounded-md bg-blue-600 text-white">
            <NavLink to="/login">Login</NavLink>
          </button>

          <button className="text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 rounded-md bg-red-600 text-white">
            <NavLink to="/signup">SignUp</NavLink>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
