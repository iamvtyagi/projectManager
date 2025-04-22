import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  FiCheckCircle,
  FiUsers,
  FiClipboard,
  FiLayers,
  FiArrowRight,
  FiZap,
  FiShield,
  FiTerminal,
  FiCode,
  FiCpu,
  FiServer,
} from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import { motion } from "framer-motion";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="page-transition"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section - Futuristic Design */}
      <div className="relative overflow-hidden text-white min-h-[90vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-neon-cyan/5 z-0"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-cyber-grid-dense z-0 opacity-20"></div>

        {/* Animated glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 filter blur-[100px] animate-pulse-slow z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 filter blur-[100px] animate-pulse-slow z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div className="md:w-1/2 mb-10 md:mb-0" variants={fadeIn}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4 px-3 py-1 bg-black/30 border border-neon-cyan/20 rounded-full text-neon-cyan text-sm font-mono"
              >
                <FiZap className="inline-block mr-2" />
                NEXT-GEN PROJECT MANAGEMENT
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-display tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {isAuthenticated ? (
                  <>
                    Welcome Back to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                      ProjectTaskr
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                      Futuristic
                    </span>{" "}
                    Project Management
                  </>
                )}
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-gray-300 max-w-xl font-cyber"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {isAuthenticated
                  ? "Continue managing your projects with our advanced AI-powered tools. Track progress and collaborate with your team in real-time."
                  : "A cutting-edge solution for teams to collaborate, track progress, and deliver projects with unprecedented efficiency and precision."}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {!isAuthenticated ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        to="/register"
                        className="px-6 py-3 rounded-md bg-black text-neon-cyan hover:text-white font-semibold flex items-center justify-center shadow-lg shadow-neon-cyan/20 border border-neon-cyan/50 neon-button"
                      >
                        <FiTerminal className="mr-2" /> Get Started{" "}
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        to="/login"
                        className="px-6 py-3 rounded-md bg-black/50 text-white hover:text-neon-purple border border-neon-purple/30 font-semibold flex items-center justify-center backdrop-blur-sm holo-button"
                      >
                        <FiShield className="mr-2" /> Sign In
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to="/dashboard"
                      className="px-6 py-3 rounded-md bg-black text-neon-cyan hover:text-white font-semibold flex items-center justify-center shadow-lg shadow-neon-cyan/20 border border-neon-cyan/50 neon-button"
                    >
                      <FiCpu className="mr-2" /> Go to Dashboard{" "}
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full max-w-md bg-black/40 backdrop-blur-md rounded-xl p-1 shadow-xl shadow-neon-cyan/10 border border-neon-cyan/20 cyber-card">
                <div className="bg-black/70 rounded-lg shadow-xl overflow-hidden border border-neon-cyan/10 relative">
                  {/* Scanner effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                      animate={{ y: [0, 300, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  {/* Terminal header */}
                  <div className="p-3 bg-black/50 border-b border-neon-cyan/10">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 text-sm text-neon-cyan font-mono flex items-center">
                        <FiTerminal className="mr-2" />{" "}
                        ProjectTaskr_Dashboard.exe
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-white font-display flex items-center">
                        <FiServer className="mr-2 text-neon-cyan" /> Active
                        Projects
                      </h3>
                      <span className="bg-black text-neon-cyan text-xs font-mono px-3 py-1 rounded-full border border-neon-cyan/30">
                        3 Projects
                      </span>
                    </div>
                    <div className="space-y-3">
                      <motion.div
                        className="bg-black/50 p-3 rounded-lg border border-neon-cyan/10 hover:border-neon-cyan/30 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          borderColor: "rgba(0, 242, 255, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan mr-3 border border-neon-cyan/30">
                              <FiLayers className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-white font-cyber">
                              Website Redesign
                            </span>
                          </div>
                          <span className="bg-black text-neon-green text-xs px-2 py-1 rounded border border-neon-green/30 font-mono">
                            IN PROGRESS
                          </span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-black/50 p-3 rounded-lg border border-neon-purple/10 hover:border-neon-purple/30 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          borderColor: "rgba(157, 0, 255, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-purple mr-3 border border-neon-purple/30">
                              <FiClipboard className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-white font-cyber">
                              Mobile App Development
                            </span>
                          </div>
                          <span className="bg-black text-neon-yellow text-xs px-2 py-1 rounded border border-neon-yellow/30 font-mono">
                            PLANNING
                          </span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-black/50 p-3 rounded-lg border border-neon-pink/10 hover:border-neon-pink/30 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          borderColor: "rgba(255, 0, 255, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-pink mr-3 border border-neon-pink/30">
                              <FiUsers className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-white font-cyber">
                              Marketing Campaign
                            </span>
                          </div>
                          <span className="bg-black text-neon-blue text-xs px-2 py-1 rounded border border-neon-blue/30 font-mono">
                            REVIEW
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section - Futuristic Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-3 py-1 bg-black/30 border border-neon-cyan/20 rounded-full text-neon-cyan text-sm font-mono">
            <FiZap className="inline-block mr-2" />
            ADVANCED FEATURES
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-display tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Next-Generation
            </span>{" "}
            Project Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-cyber">
            Our platform provides cutting-edge tools powered by advanced
            technology to streamline your workflow and maximize team
            productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-md border border-neon-cyan/20 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 cyber-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(0, 242, 255, 0.3)" }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/80 rounded-lg border border-neon-cyan/30 flex items-center justify-center shadow-lg shadow-neon-cyan/10">
                <FiLayers className="w-6 h-6 text-neon-cyan" />
              </div>
              <div className="h-1 w-1/3 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mb-8 mt-2 ml-10"></div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white font-display flex items-center">
              <span className="text-neon-cyan mr-2">01.</span> Project
              Management
            </h3>
            <p className="text-gray-300 font-cyber">
              Create and manage projects with advanced tools. Assign team
              members and track progress with real-time analytics.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-cyan/30 flex items-center justify-center mr-3 group-hover:border-neon-cyan/80 transition-colors">
                  <FiCheckCircle className="text-neon-cyan w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Holographic project dashboard
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-cyan/30 flex items-center justify-center mr-3 group-hover:border-neon-cyan/80 transition-colors">
                  <FiCheckCircle className="text-neon-cyan w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Quantum role-based permissions
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-cyan/30 flex items-center justify-center mr-3 group-hover:border-neon-cyan/80 transition-colors">
                  <FiCheckCircle className="text-neon-cyan w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  AI-powered progress tracking
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-md border border-neon-purple/20 hover:shadow-lg hover:shadow-neon-purple/20 transition-all duration-300 cyber-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(157, 0, 255, 0.3)" }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/80 rounded-lg border border-neon-purple/30 flex items-center justify-center shadow-lg shadow-neon-purple/10">
                <FiClipboard className="w-6 h-6 text-neon-purple" />
              </div>
              <div className="h-1 w-1/3 bg-gradient-to-r from-neon-purple to-transparent rounded-full mb-8 mt-2 ml-10"></div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white font-display flex items-center">
              <span className="text-neon-purple mr-2">02.</span> Task Tracking
            </h3>
            <p className="text-gray-300 font-cyber">
              Organize tasks with neural priority algorithms. Filter and sort
              with predictive intelligence to maximize productivity.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-purple/30 flex items-center justify-center mr-3 group-hover:border-neon-purple/80 transition-colors">
                  <FiCheckCircle className="text-neon-purple w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Neural priority organization
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-purple/30 flex items-center justify-center mr-3 group-hover:border-neon-purple/80 transition-colors">
                  <FiCheckCircle className="text-neon-purple w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Real-time status synchronization
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-purple/30 flex items-center justify-center mr-3 group-hover:border-neon-purple/80 transition-colors">
                  <FiCheckCircle className="text-neon-purple w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Quantum filtering algorithms
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-md border border-neon-pink/20 hover:shadow-lg hover:shadow-neon-pink/20 transition-all duration-300 cyber-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(255, 0, 255, 0.3)" }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/80 rounded-lg border border-neon-pink/30 flex items-center justify-center shadow-lg shadow-neon-pink/10">
                <FiUsers className="w-6 h-6 text-neon-pink" />
              </div>
              <div className="h-1 w-1/3 bg-gradient-to-r from-neon-pink to-transparent rounded-full mb-8 mt-2 ml-10"></div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white font-display flex items-center">
              <span className="text-neon-pink mr-2">03.</span> Team
              Collaboration
            </h3>
            <p className="text-gray-300 font-cyber">
              Communicate with holographic comments and keep everyone
              synchronized with quantum-entangled notifications.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-pink/30 flex items-center justify-center mr-3 group-hover:border-neon-pink/80 transition-colors">
                  <FiCheckCircle className="text-neon-pink w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Holographic task comments
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-pink/30 flex items-center justify-center mr-3 group-hover:border-neon-pink/80 transition-colors">
                  <FiCheckCircle className="text-neon-pink w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Neural team assignments
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <span className="w-5 h-5 rounded-full bg-black border border-neon-pink/30 flex items-center justify-center mr-3 group-hover:border-neon-pink/80 transition-colors">
                  <FiCheckCircle className="text-neon-pink w-3 h-3" />
                </span>
                <span className="font-cyber group-hover:text-white transition-colors">
                  Quantum activity tracking
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Futuristic Design */}
      <div className="relative z-10 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-neon-cyan/10 z-0"></div>
        <div className="absolute inset-0 bg-cyber-grid-dense z-0 opacity-20"></div>

        {/* Animated glow spots */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 filter blur-[100px] animate-pulse-slow z-0"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 filter blur-[100px] animate-pulse-slow z-0"></div>

        {/* Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 bg-black/30 border border-neon-cyan/20 rounded-full text-neon-cyan text-sm font-mono"
          >
            <FiZap className="inline-block mr-2" />
            QUANTUM LEAP
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-white mb-4 font-display tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {isAuthenticated ? (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                  Continue
                </span>{" "}
                Your Work
              </>
            ) : (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                  Ready
                </span>{" "}
                to Get Started?
              </>
            )}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-cyber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {isAuthenticated
              ? "Access your neural dashboard to manage your projects and tasks with quantum efficiency."
              : "Join thousands of forward-thinking teams who use ProjectTaskr to deliver projects with unprecedented speed and precision."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {!isAuthenticated && (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to="/register"
                    className="px-8 py-4 rounded-md bg-black text-neon-cyan hover:text-white font-semibold flex items-center justify-center shadow-lg shadow-neon-cyan/20 border border-neon-cyan/50 neon-button text-lg"
                  >
                    <FiTerminal className="mr-2" /> Create Neural Account
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to="/login"
                    className="px-8 py-4 rounded-md bg-black/50 text-white hover:text-neon-purple border border-neon-purple/30 font-semibold flex items-center justify-center backdrop-blur-sm holo-button text-lg"
                  >
                    <FiShield className="mr-2" /> Neural Interface
                  </Link>
                </motion.div>
              </>
            )}
            {isAuthenticated && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/dashboard"
                  className="px-8 py-4 rounded-md bg-black text-neon-cyan hover:text-white font-semibold flex items-center justify-center shadow-lg shadow-neon-cyan/20 border border-neon-cyan/50 neon-button text-lg"
                >
                  <FiCpu className="mr-2" /> Access Neural Dashboard{" "}
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
