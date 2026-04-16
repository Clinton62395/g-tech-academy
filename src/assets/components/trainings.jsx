import { motion } from "framer-motion";
import { Clock, Target, Award, Rocket } from "lucide-react";

const trainings = [
  {
    level: "Base Professionnelle",
    title: "Bureautique & Microsoft 365",
    duration: "1 mois intensif",
    results:
      "De zéro à opérationnel : Word, Excel, PowerPoint + création CV professionnel.",
    bonus: "🎁 CV + simulation entretien offerte",
    price: "250 000 GNF",
    anchor: "Accessible à tous",
    icon: Target,
  },
  {
    level: "Métier Digital",
    title: "Développement Web Complet",
    duration: "3 mois",
    results:
      "Apprenez HTML, CSS, JS + créez vos premiers sites réels (portfolio inclus).",
    bonus: "🔥 Projets concrets + accompagnement freelance",
    price: "400 000 GNF / mois",
    anchor: "Investissement carrière",
    highlight: true,
    icon: Clock,
  },
  {
    level: "International 🌍",
    title: "Python Data Science (Online)",
    duration: "Flexible",
    results: "Travaillez avec un expert basé au Nigeria. Automation, Data, IA.",
    bonus: "⚠️ 100% en anglais – niveau intermédiaire requis",
    price: "À partir de 900 000 GNF / mois",
    anchor: "Programme élite",
    isPartner: true,
    icon: Rocket,
  },
  {
    level: "Parcours Elite",
    title: "Full Stack & Mobile",
    duration: "6 mois",
    results:
      "Formation complète pour devenir développeur professionnel + projets réels + mentorat.",
    bonus: "🚀 Objectif : gagner vos premiers revenus tech",
    price: "À partir de 1 200 000 GNF / mois",
    anchor: "Transformation totale",
    icon: Award,
  },
];

export default function Trainings() {
  return (
    <section id="formations" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Transforme ta vie avec le{" "}
            <span className="text-brandCyan">digital</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nos formations ne sont pas pour tout le monde. Elles sont conçues
            pour ceux qui veulent apprendre une compétence rentable et passer à
            l’action rapidement.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainings.map((training, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-2xl border transition-all group ${
                training.highlight
                  ? "bg-brandCyan/10 border-brandCyan scale-105"
                  : training.isPartner
                    ? "bg-brandViolet/10 border-brandViolet/30"
                    : "bg-white/5 border-white/10"
              }`}
            >
              {/* HEADER */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest opacity-60">
                  {training.level}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {training.title}
                </h3>
              </div>

              {/* CONTENT */}
              <p className="text-gray-400 text-sm mb-4">{training.results}</p>

              <p className="text-xs text-gray-500 mb-3">
                ⏱ {training.duration}
              </p>

              <p className="text-xs text-green-400 mb-6">{training.bonus}</p>

              {/* PRICE */}
              <div className="mb-2">
                <span className="text-2xl font-bold text-white">
                  {training.price}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-6">{training.anchor}</p>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full py-3 rounded-xl text-center font-bold transition-all ${
                  training.isPartner
                    ? "bg-brandViolet hover:bg-purple-500"
                    : "bg-brandCyan hover:bg-cyan-500"
                } text-white`}
              >
                {training.isPartner
                  ? "Postuler (Anglais requis)"
                  : "Réserver ma place"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            ⚠️ Places limitées – Nous sélectionnons les étudiants motivés
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brandCyan to-brandViolet text-white font-bold rounded-xl hover:scale-105 transition-all"
          >
            Je veux changer ma situation
          </a>
        </div>
      </div>
    </section>
  );
}
