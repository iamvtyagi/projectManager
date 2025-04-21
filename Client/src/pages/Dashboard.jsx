import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/axiosConfig";
import AuthContext from "../context/AuthContext";
import {
  FiPlus,
  FiX,
  FiFolder,
  FiClock,
  FiCalendar,
  FiChevronRight,
} from "react-icons/fi";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    total: 0,
    pages: 0,
  });
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  });

  const {
    user,
    isAuthenticated,
    loading: authLoading,
  } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  const fetchProjects = async (page = 1) => {
    if (!isAuthenticated) {
      return;
    }

    setLoading(true);
    try {
      console.log(`Dashboard: Fetching projects for page ${page}...`);
      const res = await axios.get(
        `/projects?page=${page}&limit=${pagination.limit}`
      );
      console.log("Dashboard: Projects fetched successfully:", res.data);
      setProjects(res.data.data);
      setPagination({
        ...pagination,
        page,
        total: res.data.pagination.total,
        pages: res.data.pagination.pages,
      });
      setLoading(false);
    } catch (err) {
      console.error("Dashboard: Error fetching projects:", err);
      setError("Failed to fetch projects. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoading) {
      fetchProjects(pagination.page);
    }
  }, [isAuthenticated, authLoading, pagination.limit]); // eslint-disable-line react-hooks/exhaustive-deps

  // This effect will run when the component mounts and when isAuthenticated changes
  useEffect(() => {
    console.log(
      "Dashboard: Auth state changed - isAuthenticated:",
      isAuthenticated,
      "authLoading:",
      authLoading
    );
  }, [isAuthenticated, authLoading]);

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (!newProject.name || !newProject.description) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await axios.post("/projects", newProject);

      // Reset form and hide it
      setNewProject({ name: "", description: "" });
      setShowCreateForm(false);

      // Success message
      console.log("Project created successfully");

      // Refresh projects list
      fetchProjects(1);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create project");
    }
  };

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-2 border-neon-cyan/20 mb-4"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-neon-cyan absolute top-0 left-0"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="text-neon-cyan mt-4 font-light tracking-wider">
          LOADING PROJECTS...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition relative z-10">
      {/* Floating action button for creating projects - repositioned to bottom right */}
      {isAdmin && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => {
              setShowCreateForm(!showCreateForm);
              if (showCreateForm) {
                setNewProject({ name: "", description: "" });
              }
            }}
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              showCreateForm
                ? "bg-black text-red-400 border border-red-500/50 rotate-45"
                : "bg-black text-neon-cyan border border-neon-cyan/50"
            } neon-button`}
            aria-label={showCreateForm ? "Cancel" : "Create Project"}
          >
            <FiPlus className="w-6 h-6" />
          </button>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-black/70 text-red-300 rounded-lg border border-red-500/30 flex justify-between items-center backdrop-blur-sm">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
          <button
            onClick={() => setError("")}
            className="text-red-300 hover:bg-red-900/30 p-1 rounded-full"
            aria-label="Dismiss"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Header with centered title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          Projects Dashboard
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-3"></div>
        <p className="text-gray-300">
          Manage and track all your projects in one place
        </p>
      </div>

      {/* Modal overlay for create form */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-40 fade-in">
          <div className="bg-black/80 p-8 rounded-lg shadow-xl border border-neon-cyan/30 w-full max-w-2xl mx-4 slide-up">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neon-cyan mr-3 border border-neon-cyan/50">
                  <FiPlus className="w-4 h-4" />
                </span>
                Create New Project
              </h2>
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setNewProject({ name: "", description: "" });
                }}
                className="text-gray-400 hover:text-white p-1 rounded-full transition-colors"
                aria-label="Close form"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="name"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProject.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neon-cyan/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan bg-black/50 text-white placeholder-gray-500"
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neon-cyan/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan bg-black/50 text-white placeholder-gray-500"
                  placeholder="Describe the project purpose and goals"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end pt-4 space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false);
                    setNewProject({ name: "", description: "" });
                  }}
                  className="px-5 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none bg-black text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 neon-button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none bg-black text-neon-cyan hover:text-white border border-neon-cyan/50 hover:border-neon-cyan flex items-center neon-button"
                >
                  <FiPlus className="mr-2" /> Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects grid with futuristic design */}
      <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-md border border-neon-cyan/20 overflow-hidden">
        <div className="px-6 py-5 border-b border-neon-cyan/10 bg-black/30">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-neon-cyan mr-2 border border-neon-cyan/50">
                <FiFolder className="w-3 h-3" />
              </span>
              Your Projects
            </h2>
            <span className="bg-black text-neon-cyan text-xs font-medium px-3 py-1 rounded-full border border-neon-cyan/30">
              {pagination.total}{" "}
              {pagination.total === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-neon-cyan mb-6 border border-neon-cyan/30 shadow-lg shadow-neon-cyan/10">
              <FiFolder className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-300 max-w-md mx-auto mb-8">
              {isAdmin
                ? "Get started by creating your first project using the floating action button."
                : "You don't have any projects assigned to you yet."}
            </p>
            {isAdmin && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none bg-black text-neon-cyan hover:text-white border border-neon-cyan/50 flex items-center mx-auto neon-button"
              >
                <FiPlus className="mr-2" /> Create Your First Project
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 text-white">
              {projects.map((project) => (
                <Link
                  to={`/projects/${project._id}`}
                  key={project._id}
                  className="group block bg-black/40 border border-neon-cyan/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover relative"
                >
                  {/* Futuristic top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-neon-purple to-neon-cyan"></div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-neon-cyan border border-neon-cyan/30">
                        <FiFolder className="w-5 h-5" />
                      </div>
                      <div className="flex items-center text-neon-cyan group-hover:text-white transition-colors">
                        <span className="mr-1 text-sm">View</span>
                        <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-5 line-clamp-2 text-sm">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-neon-cyan/10">
                      <div className="flex items-center">
                        <FiCalendar className="w-3 h-3 mr-1 text-neon-cyan" />
                        <span>
                          Created:{" "}
                          {new Date(project.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="w-3 h-3 mr-1 text-neon-purple" />
                        <span>
                          {new Date(project.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Futuristic Pagination Controls */}
            {pagination.pages > 1 && (
              <div className="flex justify-center py-8 border-t border-neon-cyan/10 bg-black/30">
                <nav className="inline-flex rounded-md shadow-lg">
                  <button
                    onClick={() => fetchProjects(1)}
                    disabled={pagination.page === 1}
                    className={`px-4 py-2 rounded-l-md border border-neon-cyan/20 ${
                      pagination.page === 1
                        ? "bg-black/50 text-gray-500 cursor-not-allowed"
                        : "bg-black text-neon-cyan hover:text-white hover:border-neon-cyan/50 neon-button"
                    }`}
                  >
                    First
                  </button>
                  <button
                    onClick={() => fetchProjects(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className={`px-4 py-2 border-y border-r border-neon-cyan/20 ${
                      pagination.page === 1
                        ? "bg-black/50 text-gray-500 cursor-not-allowed"
                        : "bg-black text-neon-cyan hover:text-white hover:border-neon-cyan/50 neon-button"
                    }`}
                  >
                    Prev
                  </button>
                  <span className="px-4 py-2 border-y border-neon-cyan/20 bg-black/70 text-white font-medium">
                    <span className="text-neon-cyan">{pagination.page}</span> of{" "}
                    {pagination.pages}
                  </span>
                  <button
                    onClick={() => fetchProjects(pagination.page + 1)}
                    disabled={pagination.page === pagination.pages}
                    className={`px-4 py-2 border-y border-l border-neon-cyan/20 ${
                      pagination.page === pagination.pages
                        ? "bg-black/50 text-gray-500 cursor-not-allowed"
                        : "bg-black text-neon-cyan hover:text-white hover:border-neon-cyan/50 neon-button"
                    }`}
                  >
                    Next
                  </button>
                  <button
                    onClick={() => fetchProjects(pagination.pages)}
                    disabled={pagination.page === pagination.pages}
                    className={`px-4 py-2 rounded-r-md border border-neon-cyan/20 ${
                      pagination.page === pagination.pages
                        ? "bg-black/50 text-gray-500 cursor-not-allowed"
                        : "bg-black text-neon-cyan hover:text-white hover:border-neon-cyan/50 neon-button"
                    }`}
                  >
                    Last
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
