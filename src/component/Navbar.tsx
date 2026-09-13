import logo from "../assets/logo-text.png";
import menuIcon from "../assets/hamburger.png";

function Navbar() {
  return (
    <nav className="w-full py-4 sm:py-6 px-4 sm:px-8 sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-356.25 mx-auto">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="md:hidden flex items-center">
            <img
              src={menuIcon}
              alt="menu"
              className="h-6 w-auto cursor-pointer"
            />
          </div>
          <div className="logo hidden md:block">
            <img src={logo} alt="navbar logo" className="h-8 w-auto" />
          </div>

          <div className="logo md:hidden flex items-center">
            <img src={logo} alt="navbar logo" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center text-[#475569] space-x-8">
            <a
              href="#home"
              className="hover:text-[#DB2777] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#Technologies"
              className="hover:text-[#DB2777] font-medium transition-colors"
            >
              Technologies
            </a>
            <a
              href="#Projects"
              className="hover:text-[#DB2777] font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#About"
              className="hover:text-[#DB2777] font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#DB2777] font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#D91B7E] transition duration-200">
              Sign In
            </button>
            <button className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#D91B7E] hover:bg-[#b81267] rounded-full transition duration-200 shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
