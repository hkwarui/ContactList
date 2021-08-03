const Navigation = () => {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div class="flex space-x-7">
              {/* website logo */}
              <div>
                 <Link
                  to="/"
                  className="flex flex-nowrap items-center py-4 px-2"
                >
                  <img
                    className="h-8 mx-1  px-0 "
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Logo"
                  />
                  <span class="font-bold text-gray-600 text-lg">
                    ContactList
                  </span>
                </Link>
              </div>

              {/* Primary navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-500 focus:text-indigo-500 border-b-2 border-white focus:border-indigo-500 font-semibold hover:text-indigo-500 hover:border-indigo-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/Blog"
                  className="py-4 px-2 text-gray-500  focus:text-indigo-500 border-b-2 border-white focus:border-indigo-500 font-semibold hover:text-indigo-500 hover:border-indigo-500 transition duration-300"
                >
                  Blog
                </Link>
                <Link
                  to="/Contact"
                  className="py-4 px-2 text-gray-500 focus:text-indigo-500  border-b-2 border-white focus:border-indigo-500 font-semibold hover:text-indigo-500 hover:border-indigo-500  transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Secondary Navbar items */}
            <div className="hidden  md:flex items-center space-x-3">
              <Link
                to="/Login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-indigo-500 hover:text-white transition duration-300 focus:bg-indigo-500 focus:text-white"
              >
                Log in
              </Link>
              <Link
                to="?Signup"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-indigo-500  hover:text-white transition duration-300 focus:bg-indigo-500 focus:text-white"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button  */}
            <div class="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-indigo-500"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Mobile menu */}

            <div className="hidden mobile-menu">
              <ul class="">
                <li class="active">
                  <a
                    href="index.html"
                    class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
