// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";  // ← thiếu dòng này
import App from "./tiers/tier3/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tier3App from "./tiers/tier3/App";
import Tier4App from "./tiers/tier4/App";
import Tier5App from "./tiers/tier5/App";
import Tier6App from "./tiers/tier6/App";
import Tier7App from "./tiers/tier7/App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/tier3" element={<Tier3App />} />
      <Route path="/tier4" element={<Tier4App />} />
      <Route path="/tier5" element={<Tier5App />} />
      <Route path="/tier6" element={<Tier6App />} />
      <Route path="/tier7" element={<Tier7App />} />
    </Routes>
  </BrowserRouter>
);