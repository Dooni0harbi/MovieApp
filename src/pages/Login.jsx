// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";


// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await loginUser(email, password);
//       toast.success("Logged in successfully!");
//       navigate("/"); // Redirect to home page
//     } catch (error) {
//       toast.error("Failed to login. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded"
//           disabled={loading}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <p className="text-center mt-4">
//         Don't have an account?{" "}
//         <a href="/register" className="text-blue-500">Register</a>
//       </p>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

//______________________________________________________________________up

// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await loginUser(email, password);
//       toast.success("Logged in successfully!");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message || "Failed to login. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
//         <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Login</h1>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//           Don't have an account?{" "}
//           <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { loginUser } from "../auth/firebase";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await loginUser(email, password);
//       toast.success("Logged in successfully!");
//       navigate("/");
//     } catch (error) {
//       toast.error("Failed to login. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded"
//           disabled={loading}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <p className="text-center mt-4">
//         Don't have an account?{" "}
//         <a href="/register" className="text-blue-500">Register</a>
//       </p>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      toastErrorNotify("Login failed: " + err.message);
    }
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
      <div className={`form-container mt-[10vh] w-[380px] h-[500px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_email"
              type="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_password"
              type="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="flex justify-between">
            <span
              onClick={() => forgotPassword(email)}
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
            >
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
          <button className="btn-danger" type="submit">
            Login
          </button>
          <button
            className="flex justify-between text-center btn-danger"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
