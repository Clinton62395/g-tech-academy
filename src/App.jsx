import React from "react";

import { motion } from "framer-motion";
import Contact from "./pages/contact";
import Testimonials from "./pages/Testimony";
import ServicesPage from "./pages/servicesPage";
import Home from "./pages/Home";
import Layout from "./assets/components/layout/navLayout";
import Portfolio from "./assets/components/portefolio";
import Trainings from "./assets/components/trainings";
import { Toaster } from "sonner";
import WhyMe from "./pages/About";
// Si tu veux utiliser du routage plus tard :
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Layout>
        <main>
          {/* Hero / Home */}
          <Home />

          {/* Services */}
          <section id="services">
            <ServicesPage />
          </section>

          {/* Pourquoi moi */}
          <section>
            <WhyMe />
          </section>

          {/* Projets */}
          <section id="portfolio">
            <Portfolio />
          </section>

          {/* Formations */}
          <section id="formations">
            <Trainings />
          </section>

          {/* Témoignages */}
          <section id="testimonials">
            <Testimonials />
          </section>

          {/* Contact */}
          <section id="contact">
            <Contact />
          </section>
        </main>
      </Layout>
    </>
  );
}
export default App;
