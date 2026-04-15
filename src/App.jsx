import React from "react";

import { motion } from "framer-motion";
import Contact from "./pages/contact";
import Testimonials from "./pages/Testimony";
import ServicesPage from "./pages/servicesPage";
import Home from "./pages/Home";
import Layout from "./assets/components/layout/navLayout";
import { Toaster, toast } from "sonner";
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
          <section className="py-24 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Apprentissage Orienté{" "}
                <span className="text-brandCyan">Emploi</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Formation pratique et projets concrets pour les jeunes talents
                de Guinée.
              </p>
            </div>
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
