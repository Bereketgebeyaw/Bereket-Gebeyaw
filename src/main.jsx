import React from "react";
import ReactDOM from "react-dom/client";  // React 18 import for createRoot
import './index.css';  // Optional: Global styles
import App from './App';  // Import the App component

const rootElement = document.getElementById('root');  // Get the root div from HTML
const root = ReactDOM.createRoot(rootElement);  // Create the root using React 18 API

root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
