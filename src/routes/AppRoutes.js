import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const Team = lazy(() => import("../pages/Team"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));

function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
