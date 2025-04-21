import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import {
  basicLimiter,
  authLimiter,
  apiLimiter,
} from "./middleware/rateLimiter.js";
import {
  generateCsrfToken,
  verifyCsrfToken,
} from "./middleware/csrfProtection.js";
import { requestLogger } from "./middleware/requestLogger.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(cookieParser());

// No session configuration needed

// CORS configuration allowing all origins for deployment but in a way that works with credentials
const corsOptions = {
  origin: function (origin, callback) {
    // Allow all origins by returning true
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "X-Requested-With",
    "X-CSRF-Token",
    "X-XSRF-Token",
  ],
  credentials: true,
  exposedHeaders: ["Content-Length", "Authorization"],
};

// Use the configured CORS options
app.use(cors(corsOptions));
console.log("CORS configured to allow requests from any origin");

// Enable pre-flight for all routes
app.options("*", cors(corsOptions));

console.log("CORS pre-flight requests enabled for all routes");

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.path} - Origin: ${
      req.headers.origin || "No origin"
    } - IP: ${req.ip}`
  );
  next();
});

app.use(morgan("dev"));

// Request logging for security auditing
app.use(requestLogger);

// Security middleware
app.use(helmet()); // Adds various HTTP headers for security

// Apply rate limiting
app.use(basicLimiter); // Basic rate limiting for all routes
app.use("/api/auth", authLimiter); // Stricter rate limiting for auth routes
app.use("/api", apiLimiter); // API rate limiting

// CSRF protection - temporarily disabled for troubleshooting
// app.use(generateCsrfToken); // Generate CSRF token
// app.use('/api', verifyCsrfToken); // Verify CSRF token for API routes

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Project & Task Management API is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
