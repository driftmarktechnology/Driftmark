import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const Team = lazy(() => import("../pages/Team"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Career = lazy(() => import("../pages/Career"));
const Terms = lazy(() => import("../pages/Terms"));
const Sitemap = lazy(() => import("../Sitemap"));
const WebDesign = lazy(() => import("../pages/WebDesign"));
const WebDevelopment = lazy(() => import("../pages/WebDevelopment"));
const ProductManagement = lazy(() => import("../pages/ProductManagement"));
const Marketing = lazy(() => import("../pages/Marketing"));
const GraphicDesign = lazy(() => import("../pages/GraphicDesign"));

function AppRoutes() {
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
            }}
          >
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
