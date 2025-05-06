// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import AppRouter from "./router/AppRouter";
// import AuthContextProvider from "./context/AuthContext";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <AuthContextProvider>
//       <BrowserRouter>
//         <Navbar />
//         <AppRouter />
//       </BrowserRouter>
//     </AuthContextProvider>
//   );
// }

// export default App;


// import React from "react";
// import "./index.css";
// import { AuthContextProvider } from "./context/AuthContext";
// import AppRouter from "./router/AppRouter";
// import 'react-toastify/dist/ReactToastify.css'; 
// import { ToastContainer } from "react-toastify";
// import { MovieContextProvider } from "./context/MovieContext";
// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <div className="dark:bg-gray-dark-main">  
//       <BrowserRouter>
//       <AuthContextProvider>
//         <MovieContextProvider>
    
// //           <AppRouter />
// //           <ToastContainer
//               position="top-right"  // Position of the toast
//               autoClose={3000}  // Auto close after 3 seconds
//               hideProgressBar={false}  // Option to hide progress bar
//               newestOnTop={true}  // Make new toasts appear on top
//               closeButton={true}  // Show close button
//               rtl={false}  // Disable right-to-left text (if needed)
//               toastClassName="bg-gray-800 text-white text-sm rounded-lg shadow-lg"  // Customize toast appearance
//               bodyClassName="text-lg font-medium"  // Customize body text
//               progressClassName="bg-blue-500"  // Customize progress bar
//               iconClassName="text-lg"  // Set icon size
//             />
          
//           </MovieContextProvider>
//       </AuthContextProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from "react-toastify";
import { MovieContextProvider } from "./context/MovieContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-gray-dark-main">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,  // ✅ this is the one suppressing that warning
        }}
      >
        <AuthContextProvider>
          <MovieContextProvider>
            <AppRouter />
            <ToastContainer
           
             position="top-right"
             autoClose={3000}
             hideProgressBar={false}
             newestOnTop={true}
             closeButton={true}
             rtl={false}
             pauseOnFocusLoss={false}  // ✅ ensures toast stays on route changes
             closeOnClick
             toastClassName="bg-gray-800 text-white text-sm rounded-lg shadow-lg"
             bodyClassName="text-lg font-medium"
             progressClassName="bg-blue-500"
         
            />
          </MovieContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
