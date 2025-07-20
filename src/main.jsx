import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // corrected import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // important for styling

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </BrowserRouter>
);
