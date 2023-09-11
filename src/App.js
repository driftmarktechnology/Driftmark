import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header"; // Ensure the path is correct
import Footer from "../src/components/Footer";
import AppRoutes from "../src/routes/AppRoutes"; // Assuming routes.js is in the root directory

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
