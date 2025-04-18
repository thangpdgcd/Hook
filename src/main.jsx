import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStates from "./useState.jsx";
import Mathrandom from "./Two_way_binding.jsx";
import FormInput from "./Form.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/use" element={<UseStates />} />
        <Route path="/math" element={<Mathrandom />} />
        <Route path="/form" element={<FormInput />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
