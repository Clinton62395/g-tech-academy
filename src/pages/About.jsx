import { Target } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyMe() {
  return (
    <>
      {" "}
      {/* Pourquoi moi */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="flex gap-2 items-center justify-center flexshrink-0 mb-6">
            <Target size={40} strokeWidth={1.5} />
            <h2 className="text-4xl font-bold mb-6">
              Pourquoi me <span className="text-brandCyan">choisir</span> ?
            </h2>
          </div>

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
                Pas de théorie inutile. Apprentissage par la pratique avec des
                projets réels.
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
                Suivi personnalisé et mentorat pour réussir votre carrière tech.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
