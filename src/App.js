import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header"; // Ensure the path is correct
import Footer from "../src/components/Footer";
import AppRoutes from "../src/routes/AppRoutes"; // Assuming routes.js is in the root directory
import { Helmet } from "react-helmet"; // Import Helmet

function App() {
  return (
    <Router>
      <div>
        <div class="elfsight-app-8ad0234d-a9c2-4a8e-ba72-1b9f88770736"></div>
        <Helmet>
          <title>Driftmark</title>
          <meta
            name="description"
            content="Leading software solutions provider specializing in web and mobile application development, cloud services, and cutting-edge technologies."
          />

          <meta
            property="og:title"
            content="Driftmark - Transforming Ideas into Software"
          />

          <meta
            property="og:description"
            content="Driftmark - Pioneering the Future of Software. Learn about our journey, mission, and vision."
          />
          <meta property="og:image" content="http://driftmarktechnology.com/" />
          <meta
            property="og:url"
            content="http://driftmarktechnology.com//about"
          />
          <meta property="og:type" content="website" />

          <meta
            name="twitter:title"
            content="Leading software solutions provider specializing in web and mobile application development, cloud services, and cutting-edge technologies."
          />
          <meta
            name="twitter:description"
            content={
              "Driftmark - Pioneering the Future of Software. Learn about our journey, mission, and vision."
            }
          />
          <meta
            name="twitter:image"
            content={"http://driftmarktechnology.com/"}
          />
          <meta name="twitter:card" content="summary_large_image" />
          {/* Add other head elements as needed */}
        </Helmet>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
