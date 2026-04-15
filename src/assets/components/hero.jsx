import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]" />

      <div className="max-w-5xl text-center z-10">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-brandCyan uppercase bg-brandCyan/10 border border-brandCyan/20 rounded-full backdrop-blur-md"
        >
          🚀 Devenez un Expert Tech en Guinée
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Apprenez la technologie et lancez votre carrière dès aujourd’hui
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          G-tech-academy accompagne les débutants vers une carrière tech solide
          avec une formation 100% pratique basée sur des projets réels.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-brandCyan hover:bg-cyan-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Commencer maintenant
          </a>

          <a
            href="https://wa.me/224623952011?text=Bonjour%20%21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all"
          >
            Discuter sur WhatsApp
          </a>
        </motion.div>

        {/* Urgence */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-6 text-sm text-brandViolet font-medium animate-pulse"
        >
          ⚠️ Places limitées pour la prochaine session !
        </motion.p>
      </div>
    </section>
  );
}
