import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import {
  FiMail,
  FiLock,
  FiLogIn,
  FiAlertCircle,
  FiShield,
  FiCpu,
  FiTerminal,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setLoginError("Please enter all fields");
        return;
      }

      console.log("Attempting to login with:", { email });

      // Show loading state
      setIsLoading(true);
      setLoginError("");

      // Show toast notification about potential delay
      toast.info(
        "The server might take up to a minute to start if it hasn't been used recently.",
        { autoClose: 10000 } // Keep the message visible for 10 seconds
      );

      const result = await login({ email, password });
      console.log("Login result:", result);

      // Hide loading state
      setIsLoading(false);

      if (result && result.success) {
        console.log("Login successful, redirecting to home page");

        // Wait a moment before redirecting
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setLoginError(result?.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      setLoginError("An unexpected error occurred during login");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] page-transition relative z-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid-dense z-0 opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 filter blur-[100px] animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 filter blur-[100px] animate-pulse-slow z-0"></div>

      <motion.div
        className="bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-neon-cyan/20 w-full max-w-md cyber-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="relative inline-block">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-neon-cyan mb-4 shadow-lg shadow-neon-cyan/20 border border-neon-cyan/30"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(0, 242, 255, 0.2)",
                  "0 0 20px rgba(0, 242, 255, 0.4)",
                  "0 0 10px rgba(0, 242, 255, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiTerminal className="w-10 h-10" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black flex items-center justify-center border border-neon-cyan/50"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiShield className="w-4 h-4 text-neon-cyan" />
            </motion.div>
          </div>
          <motion.h1
            className="text-3xl font-bold text-white font-display tracking-wide"
            animate={{
              textShadow: [
                "0 0 5px rgba(0, 242, 255, 0.3)",
                "0 0 10px rgba(0, 242, 255, 0.5)",
                "0 0 5px rgba(0, 242, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Neural <span className="text-neon-cyan">Interface</span>
          </motion.h1>
          <motion.p className="text-gray-300 mt-2 font-cyber">
            Access your secure neural connection to continue
          </motion.p>
        </motion.div>

        {loginError && (
          <motion.div
            className="mb-6 p-4 bg-black/50 text-red-300 rounded-lg border border-red-500/30 flex items-center backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            variants={itemVariants}
          >
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-red-500 mr-3 border border-red-500/30">
              <FiAlertCircle className="w-5 h-5" />
            </div>
            <span className="font-cyber">{loginError}</span>
          </motion.div>
        )}

        <motion.form
          onSubmit={onSubmit}
          className="space-y-6"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label
              className="block text-sm font-medium text-neon-cyan mb-2 font-cyber"
              htmlFor="email"
            >
              Neural ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-neon-cyan" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-full px-3 py-3 border border-neon-cyan/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan pl-10 bg-black/50 text-white placeholder-gray-500 font-mono cyber-input"
                placeholder="your.id@neural.net"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium text-neon-cyan mb-2 font-cyber"
                htmlFor="password"
              >
                Neural Key
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="text-neon-purple hover:text-neon-pink transition-colors font-mono"
                >
                  Reset neural key?
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-neon-cyan" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                className="w-full px-3 py-3 border border-neon-cyan/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan pl-10 bg-black/50 text-white placeholder-gray-500 font-mono cyber-input"
                placeholder="••••••••••••"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="px-5 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none bg-black text-neon-cyan hover:text-white border border-neon-cyan/50 w-full flex justify-center items-center shadow-lg shadow-neon-cyan/20 neon-button font-cyber"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-neon-cyan">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <span>Initializing neural connection...</span>
                </>
              ) : (
                <>
                  <FiTerminal className="mr-2" /> Access Neural Interface
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div className="mt-8 text-center" variants={itemVariants}>
          <p className="text-gray-300 font-cyber">
            No neural profile?{" "}
            <Link
              to="/register"
              className="text-neon-purple hover:text-neon-pink transition-colors font-mono"
            >
              Initialize new neural profile
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
