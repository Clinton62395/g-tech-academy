import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Easiland Pay",
    desc: "Marketplace immobilière multiple rôles : buyer, seller, admin et enterprise.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    demo: "https://easiland-kappa.vercel.app/",
    code: "#",
  },
  {
    title: "E-commerce Premium",
    desc: "Boutique en ligne complète avec gestion de produits, paiement et tableau d'administration.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://e-commerce-project-azure-five.vercel.app/",
    code: "#",
  },
  {
    title: "Billy Fullstack",
    desc: "Portfolio fullstack et vitrine personnelle avec animations premium.",
    tech: ["React", "Node.js", "Tailwind"],
    demo: "https://billy-fullstack.vercel.app/",
    code: "#",
  },
  {
    title: "Plateforme d'affiliation",
    desc: "Solution e-commerce affiliée avec le même stack que le site e-commerce principal.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://affinatesale.vercel.app/",
    code: "#",
  },
  {
    title: "EduTrack Mobile",
    desc: "Appli mobile Firebase pour e-learning : chat, certificats, progression et notifications.",
    tech: ["Firebase", "React Native", "Realtime DB"],
    demo: "https://com-billydoumbouya-edutrack.en.uptodown.com/android",
    code: "#",
    isDownload: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Projets <span className="text-brandCyan">Réalisés</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes dernières réalisations pour clients en Guinée et à
            l'international.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-brandCyan/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-brandCyan/20 to-brandViolet/20 flex items-center justify-center">
                <span className="text-6xl opacity-20">💻</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-brandCyan/10 text-brandCyan text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => window.open(project.demo, "_blank")}
                    className="flex items-center gap-2 text-sm text-brandCyan hover:underline cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    {project.isDownload ? "Télécharger" : "Demo"}
                  </button>
                  {project.code && project.code !== "#" && (
                    <button
                      onClick={() => window.open(project.code, "_blank")}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer"
                    >
                      <Github size={16} />
                      Code
                    </button>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
