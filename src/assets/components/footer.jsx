import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiArrowUp,
} from "react-icons/hi";
import { Mail, MailCheckIcon } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/xdayawvy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      setSuccess(true);
      setEmail("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Impossible de s'inscrire. Réessayez.");
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
              G-tech<span className="text-cyan-400">-academy</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Startup tech guinéenne spécialisée en formation et développement
              web. G-tech-academy aide les jeunes à lancer leur carrière avec
              des projets concrets.
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
              {[
                "services",
                "portfolio",
                "formations",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
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
                <MailCheckIcon className="text-purple-400" size={18} />
                billydoumbouya5210@gmail.com
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          {/* 4. Newsletter - Version Améliorée */}
          <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              Restez informé <Rocket size={18} className="text-cyan-400" />
            </h3>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Conseils tech, nouvelles formations et opportunités exclusives.
            </p>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium text-center"
              >
                ✅ Inscription réussie !
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all placeholder:text-gray-600"
                  />
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-cyan-400 transition-colors"
                    size={18}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 rounded-xl transition-all font-bold text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Chargement..." : "S'abonner à la newsletter"}
                </button>

                {error && (
                  <p className="text-red-400 text-xs mt-2 text-center">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} G-tech-academy. Tous droits réservés.
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
