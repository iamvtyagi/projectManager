import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  FiHome,
  FiGrid,
  FiLogOut,
  FiUser,
  FiMenu,
  FiX,
  FiUserPlus,
  FiShield,
  FiTerminal,
  FiZap,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        to={to}
        className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors ${isActive(
          to
        )}`}
      >
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <span className="relative">
          {children}
          {isActive(to) === "text-neon-cyan font-medium" && (
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </span>
      </Link>
    </motion.div>
  );

  // Guest links for desktop navigation
  const guestLinks = (
    <div className="flex items-center space-x-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          to="/login"
          className={`flex items-center py-2 px-3 rounded-md transition-colors ${isActive(
            "/login"
          )}`}
        >
          <FiUser className="mr-2" />
          <span>Login</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          to="/register"
          className="flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none bg-black text-neon-cyan hover:text-white border border-neon-cyan/50 shadow-lg shadow-neon-cyan/20 neon-button"
        >
          <FiUserPlus className="mr-2" />
          <span>Register</span>
        </Link>
      </motion.div>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-black/80 backdrop-blur-md border-b border-neon-cyan/20 fixed top-0 left-0 right-0 w-full z-50 shadow-lg shadow-neon-cyan/10"
    >
      {/* Animated scanner line effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <motion.div
                  className="h-10 w-10 bg-black rounded-md flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-neon-cyan/30 overflow-hidden border border-neon-cyan/50"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(0, 242, 255, 0.3)",
                      "0 0 20px rgba(0, 242, 255, 0.5)",
                      "0 0 10px rgba(0, 242, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src="/logo-neon.svg"
                    alt="ProjectTaskr Logo"
                    className="w-full h-full object-cover"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-xl font-bold text-white font-display tracking-wider"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                      "0 0 10px rgba(0, 242, 255, 0.5)",
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Project<span className="text-neon-cyan">Taskr</span>
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Right navigation */}
          <nav className="hidden md:flex md:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <motion.div
                  className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-neon-cyan/20"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(0, 242, 255, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan font-semibold shadow-lg shadow-neon-cyan/30 border border-neon-cyan/50"
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(0, 242, 255, 0.3)",
                        "0 0 10px rgba(0, 242, 255, 0.5)",
                        "0 0 5px rgba(0, 242, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {user?.name?.charAt(0).toUpperCase()}
                  </motion.div>
                  <span className="text-white font-cyber">
                    {user?.name}
                    {user?.role === "admin" && (
                      <motion.span
                        className="ml-1 text-xs text-white bg-black px-1.5 py-0.5 rounded-full border border-neon-purple/50 shadow-sm shadow-neon-purple/20"
                        animate={{
                          boxShadow: [
                            "0 0 5px rgba(157, 0, 255, 0.2)",
                            "0 0 10px rgba(157, 0, 255, 0.4)",
                            "0 0 5px rgba(157, 0, 255, 0.2)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FiShield
                          className="inline-block mr-1 text-neon-purple"
                          size={10}
                        />
                        Admin
                      </motion.span>
                    )}
                  </span>
                </motion.div>
                <motion.button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-sm text-red-300 hover:text-red-200 bg-black/40 rounded-md transition-colors border border-red-500/20 hover:border-red-500/40 neon-button"
                  aria-label="Logout"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FiLogOut className="mr-1.5" /> Logout
                </motion.button>
              </div>
            ) : (
              guestLinks
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neon-cyan hover:text-white hover:bg-black/50 focus:outline-none border border-neon-cyan/30"
              whileHover={{ scale: 1.1, borderColor: "rgba(0, 242, 255, 0.5)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Futuristic redesign with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md border-b border-neon-cyan/20 relative z-50 shadow-lg shadow-neon-cyan/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Animated scanner line effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"
                animate={{ y: [0, 300, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Logo centered in mobile menu */}
            <motion.div
              className="flex justify-center py-4 border-b border-neon-cyan/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="h-8 w-8 bg-black rounded-md flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-neon-cyan/30 overflow-hidden border border-neon-cyan/50"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                      "0 0 10px rgba(0, 242, 255, 0.5)",
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src="/logo-neon.svg"
                    alt="ProjectTaskr Logo"
                    className="w-full h-full object-cover"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-xl font-bold text-white font-display tracking-wider"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                      "0 0 10px rgba(0, 242, 255, 0.5)",
                      "0 0 5px rgba(0, 242, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Project<span className="text-neon-cyan">Taskr</span>
                </motion.span>
              </div>
            </motion.div>

            {/* Navigation links */}
            <motion.div
              className="pt-4 pb-3 space-y-3 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <NavLink to="/" icon={<FiHome className="text-lg" />}>
                Home
              </NavLink>
              {isAuthenticated && (
                <NavLink to="/dashboard" icon={<FiGrid className="text-lg" />}>
                  Dashboard
                </NavLink>
              )}
            </motion.div>

            {/* Auth/Guest links */}
            <motion.div
              className="px-4 pt-2 pb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {isAuthenticated ? (
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-2 py-2 px-3 bg-black/30 rounded-md border border-neon-cyan/10"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(0, 242, 255, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan font-semibold shadow-lg shadow-neon-cyan/30 border border-neon-cyan/50"
                      animate={{
                        boxShadow: [
                          "0 0 5px rgba(0, 242, 255, 0.3)",
                          "0 0 10px rgba(0, 242, 255, 0.5)",
                          "0 0 5px rgba(0, 242, 255, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {user?.name?.charAt(0).toUpperCase()}
                    </motion.div>
                    <span className="text-white font-cyber">
                      {user?.name}
                      {user?.role === "admin" && (
                        <motion.span
                          className="ml-1 text-xs text-white bg-black px-1.5 py-0.5 rounded-full border border-neon-purple/50 shadow-sm shadow-neon-purple/20"
                          animate={{
                            boxShadow: [
                              "0 0 5px rgba(157, 0, 255, 0.2)",
                              "0 0 10px rgba(157, 0, 255, 0.4)",
                              "0 0 5px rgba(157, 0, 255, 0.2)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FiShield
                            className="inline-block mr-1 text-neon-purple"
                            size={10}
                          />
                          Admin
                        </motion.span>
                      )}
                    </span>
                  </motion.div>
                  <motion.button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-red-300 hover:text-red-200 bg-black/30 rounded-md transition-colors border border-red-500/20 hover:border-red-500/40 neon-button"
                    aria-label="Logout"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <FiLogOut className="mr-2" /> Logout
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to="/login"
                      className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-neon-cyan hover:text-white bg-black/30 rounded-md transition-colors border border-neon-cyan/20 neon-button"
                    >
                      <FiUser className="mr-2" /> Login
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to="/register"
                      className="flex w-full items-center justify-center py-3 px-3 text-base font-medium text-white bg-black/50 hover:bg-black/70 rounded-md transition-colors border border-neon-cyan/30 neon-button"
                    >
                      <FiUserPlus className="mr-2" /> Register
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
