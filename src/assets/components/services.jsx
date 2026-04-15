import { motion } from "framer-motion";
const services = [
  {
    title: "Développement Web",
    desc: "Sites vitrines et applications modernes.",
    price: "Sur devis",
  },
  {
    title: "Formation Tech",
    desc: "Passez de débutant à pro en 3 mois.",
    price: "À partir de...",
  },
  {
    title: "Intégration API",
    desc: "Connectez vos outils et automatisez.",
    price: "Sur devis",
  },
  {
    title: "Maintenance",
    desc: "Support technique et optimisation.",
    price: "À partir de...",
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-20">
      {services.map((s, i) => (
        <motion.div
          whileHover={{ y: -10 }}
          key={i}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-brandCyan/50 transition-all group"
        >
          <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">{s.desc}</p>
          <div className="text-brandCyan font-semibold">{s.price}</div>
        </motion.div>
      ))}
    </div>
  );
}
