import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mamadou Sylla",
    role: "Étudiant en Informatique",
    content:
      "Grâce à la formation de Clinton, j'ai pu coder mon premier site pro en moins de 2 mois. Une approche vraiment pratique !",
    avatar: "MS",
  },
  {
    name: "Aissatou Diallo",
    role: "Entrepreneuse",
    content:
      "Il a refait tout le système de gestion de ma boutique. Rapidité, design premium et surtout un suivi impeccable.",
    avatar: "AD",
  },
  {
    name: "Thierno Barry",
    role: "Développeur Junior",
    content:
      "L'intégration d'API était un mystère pour moi. Clinton explique avec une clarté rare. Je recommande à 100%.",
    avatar: "TB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonies" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Ils m'ont fait confiance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brandCyan to-brandViolet flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-brandCyan text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic text-sm leading-relaxed">
                "{t.content}"
              </p>
              <div className="mt-6 flex text-yellow-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
