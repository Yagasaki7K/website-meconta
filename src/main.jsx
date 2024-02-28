import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Toaster } from 'sonner';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
)
