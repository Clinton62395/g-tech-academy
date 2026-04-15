import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Footer from "../footer";
import Background from "../ui/backgroundAnimation";
import Navbar from "../navbar";

/**
 * Layout Principal : Gère la structure globale, le z-index
 * et les éléments persistants (Nav, Footer, WhatsApp).
 */
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-brandCyan/30 overflow-x-hidden font-sans">
      {/* --- COUCHE 0 : BACKGROUND ANIMÉ --- */}
      {/* Fixé en arrière-plan pour ne pas interférer avec le scroll */}
      <div className="fixed inset-0 z-0">
        <Background />
        {/* Overlay gradient pour améliorer la lisibilité du texte sur les particules */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 pointer-events-none" />
      </div>

      {/* --- COUCHE 1 : NAVIGATION --- */}
      <Navbar />

      {/* --- COUCHE 2 : CONTENU DYNAMIQUE --- */}
      {/* On ajoute un padding-top pour compenser la Navbar fixe */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- COUCHE 3 : FOOTER PREMIUM --- */}
      <Footer />

      {/* --- COUCHE 4 : CTAs FLOTTANTS (CONVERSION) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Badge "Places Limitées" (Psychologie de vente) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, type: "spring" }}
          className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandCyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brandCyan"></span>
          </span>
          Session Formation :{" "}
          <span className="text-brandCyan">3 places restantes</span>
        </motion.div>

        {/* Bouton WhatsApp */}
        <motion.a
          href="https://wa.me/224623952011" // À remplacer par ton numéro
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-4 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center self-end"
          title="Discuter sur WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" className="text-white" />
        </motion.a>
      </div>

      {/* --- EFFETS DE GLOW AMBIANT --- */}
      {/* Cercles de lumière subtils pour le design premium */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brandCyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brandViolet/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
};

export default Layout;
