import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiArrowUp,
} from "react-icons/hi";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://formspree.io/f/xdayawvy", { email });

      setSuccess(true);
      setEmail("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-10 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />

      <div className="container mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Identity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Clinton<span className="text-cyan-400">DevOps</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Développeur web et formateur tech. J’aide les jeunes en Guinée à
              construire une carrière solide dans la tech avec des projets
              concrets.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Navigation
            </h3>

            <ul className="space-y-4">
              {["services", "portfolio", "formations", "testimonials"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <HiOutlineLocationMarker
                  className="text-purple-400"
                  size={18}
                />
                Kankan, Guinée
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-purple-400" size={18} />
                +224 623-95-20-11
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-purple-400" size={18} />
                contact@clintondevops.com
              </li>
            </ul>
          </div>

          {/* 4. CTA Newsletter */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-white font-semibold mb-2">Restez informé 🚀</h3>

            <p className="text-gray-400 text-xs mb-4">
              Conseils tech + formations + opportunités.
            </p>

            {success ? (
              <p className="text-green-400 text-xs font-medium">
                ✅ Inscription réussie !
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-3 py-2 rounded-lg transition text-xs"
                >
                  {loading ? "..." : "OK"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Clinton DevOps. Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition"
          >
            Retour en haut
            <span className="p-2 rounded-full border border-white/10 hover:border-cyan-400 transition">
              <HiArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
