import { motion } from "framer-motion";
import { Clock, Users, Target, Award } from "lucide-react";

const trainings = [
  {
    level: "Débutant",
    title: "Initiation à l'Informatique",
    duration: "1 mois",
    results: "Maîtrise des bases : navigation, bureautique, internet",
    price: "À partir de 50 000 GNF",
    icon: Target,
  },
  {
    level: "Intermédiaire",
    title: "Développement Web Complet",
    duration: "3 mois",
    results: "Créer sites web modernes, comprendre les APIs",
    price: "À partir de 200 000 GNF",
    icon: Clock,
  },
  {
    level: "Avancé",
    title: "React Native & Applications Mobiles",
    duration: "4 mois",
    results: "Construire des applications mobiles natives pour Android et iOS",
    price: "Sur devis",
    icon: Award,
  },
  {
    level: "Expert",
    title: "Full Stack + Projet Personnel",
    duration: "6 mois",
    results: "Développeur complet avec portfolio professionnel",
    price: "Sur devis",
    icon: Award,
  },
];

export default function Trainings() {
  return (
    <section id="formations" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Formations <span className="text-brandCyan">Tech</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Programmes intensifs orientés emploi pour jeunes guinéens. Formation
            pratique + projets réels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-brandCyan/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brandCyan/10 rounded-xl flex items-center justify-center">
                  <training.icon className="text-brandCyan" size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brandViolet font-semibold">
                    {training.level}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {training.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock size={16} />
                  Durée: {training.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users size={16} />
                  Résultats: {training.results}
                </div>
              </div>

              <div className="text-brandCyan font-semibold text-lg">
                {training.price}
              </div>

              <a
                href="#contact"
                className="block w-full mt-6 py-3 bg-brandCyan hover:bg-cyan-500 text-white font-bold rounded-xl text-center transition-all"
              >
                S'inscrire
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 mb-4">
            💼 Formation orientée emploi - Passe de débutant à professionnel
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brandCyan to-brandViolet text-white font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Commencer ma formation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
