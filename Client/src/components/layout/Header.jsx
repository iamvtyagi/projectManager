import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FiHome, FiGrid, FiLogOut, FiUser, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      // Show loading state or feedback if needed

      // Call logout function
      await logout();

      // Close mobile menu
      setMobileMenuOpen(false);

      // Redirect to home page if needed
      // You can uncomment this if you want to redirect after logout
      // window.location.href = '/';
    } catch (error) {
      console.error("Error during logout:", error);
      // Even if there's an error, we still want to close the mobile menu
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-neon-cyan font-medium"
      : "text-gray-300 hover:text-neon-cyan";
  };

  const NavLink = ({ to, icon, children }) => (
    <Link
      to={to}
      className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors ${isActive(
        to
      )}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );

  // Guest links for desktop navigation
  const guestLinks = (
    <div className="flex items-center space-x-4">
      <Link
        to="/login"
        className={`py-2 px-3 rounded-md transition-colors ${isActive(
          "/login"
        )}`}
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-neon-cyan hover:text-white focus:ring-neon-cyan shadow-lg shadow-neon-cyan/20 border border-neon-cyan/50 neon-button"
      >
        Register
      </Link>
    </div>
  );

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-neon-cyan/20 fixed top-0 left-0 right-0 w-full z-50 shadow-lg shadow-neon-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New centered layout with logo in center */}
        <div className="flex justify-between items-center h-16 relative">
          {/* Left navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink to="/" icon={<FiHome className="text-lg" />}>
              Home
            </NavLink>
            {isAuthenticated && (
              <NavLink to="/dashboard" icon={<FiGrid className="text-lg" />}>
                Dashboard
              </NavLink>
            )}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 bg-black rounded-md flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-neon-cyan/30 overflow-hidden border border-neon-cyan/50">
                  <img
                    src="/logo-neon.svg"
                    alt="ProjectTaskr Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  ProjectTaskr
                </span>
              </div>
            </Link>
          </div>

          {/* Right navigation */}
          <nav className="hidden md:flex md:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan font-semibold shadow-lg shadow-neon-cyan/30 border border-neon-cyan/50">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white">
                    {user?.name}
                    {user?.role === "admin" && (
                      <span className="ml-1 text-xs text-white bg-black px-1.5 py-0.5 rounded-full border border-neon-purple/50 shadow-sm shadow-neon-purple/20">
                        Admin
                      </span>
                    )}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-sm text-red-300 hover:text-red-200 hover:bg-black/50 rounded-md transition-colors border border-red-500/20 hover:border-red-500/40 neon-button"
                  aria-label="Logout"
                >
                  <FiLogOut className="mr-1.5" /> Logout
                </button>
              </div>
            ) : (
              guestLinks
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neon-cyan hover:text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neon-cyan border border-neon-cyan/30"
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Redesigned with vertical layout */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-neon-cyan/20 relative z-50 shadow-lg shadow-neon-cyan/5">
          {/* Logo centered in mobile menu */}
          <div className="flex justify-center py-4 border-b border-neon-cyan/10">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-neon-cyan/30 overflow-hidden border border-neon-cyan/50">
                <img
                  src="/logo-neon.svg"
                  alt="ProjectTaskr Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">ProjectTaskr</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="pt-4 pb-3 space-y-3 px-4">
            <NavLink to="/" icon={<FiHome className="text-lg" />}>
              Home
            </NavLink>
            {isAuthenticated && (
              <NavLink to="/dashboard" icon={<FiGrid className="text-lg" />}>
                Dashboard
              </NavLink>
            )}
          </div>

          {/* Auth/Guest links */}
          <div className="px-4 pt-2 pb-5">
            {isAuthenticated ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 py-2 px-3 bg-black/30 rounded-md border border-neon-cyan/10">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan font-semibold shadow-lg shadow-neon-cyan/30 border border-neon-cyan/50">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white">
                    {user?.name}
                    {user?.role === "admin" && (
                      <span className="ml-1 text-xs text-white bg-black px-1.5 py-0.5 rounded-full border border-neon-purple/50 shadow-sm shadow-neon-purple/20">
                        Admin
                      </span>
                    )}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-red-300 hover:text-red-200 hover:bg-black/50 rounded-md transition-colors border border-red-500/20 hover:border-red-500/40 neon-button"
                  aria-label="Logout"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-neon-cyan hover:text-white hover:bg-black/30 rounded-md transition-colors border border-neon-cyan/20 neon-button"
                >
                  <FiUser className="mr-2" /> Login
                </Link>
                <Link
                  to="/register"
                  className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-white bg-black/50 hover:bg-black/70 rounded-md transition-colors border border-neon-cyan/30 neon-button"
                >
                  <FiUserPlus className="mr-2" /> Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
