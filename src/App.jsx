import React from "react";

import { motion } from "framer-motion";
import Contact from "./pages/contact";
import Testimonials from "./pages/Testimony";
import ServicesPage from "./pages/servicesPage";
import Home from "./pages/Home";
import Layout from "./assets/components/layout/navLayout";
import Portfolio from "./assets/components/portefolio";
import Trainings from "./assets/components/trainings";
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
                Pourquoi me <span className="text-brandCyan">choisir</span> ?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Approche Pratique</h3>
                  <p className="text-gray-400 text-sm">
                    Pas de théorie inutile. Apprentissage par la pratique avec
                    des projets réels.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">Projets Concrets</h3>
                  <p className="text-gray-400 text-sm">
                    Chaque formation se termine par un projet portfolio
                    professionnel.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-2">Accompagnement</h3>
                  <p className="text-gray-400 text-sm">
                    Suivi personnalisé et mentorat pour réussir votre carrière
                    tech.
                  </p>
                </motion.div>
              </div>
            </div>
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
