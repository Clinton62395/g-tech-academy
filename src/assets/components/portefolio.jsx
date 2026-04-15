import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Easiland Pay",
    desc: "Marketplace immobilière multiple rôles : buyer, seller, admin et enterprise.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    demo: "https://easiland-kappa.vercel.app/",
    code: "#",
    image: "/easylan-pay.png",
  },
  {
    title: "E-commerce Premium",
    desc: "Boutique en ligne complète avec gestion de produits, paiement et tableau d'administration.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://e-commerce-project-azure-five.vercel.app/",
    code: "#",
    image: "/e-commerce.png",
  },
  {
    title: "Billy Fullstack",
    desc: "Portfolio fullstack et vitrine personnelle avec animations premium.",
    tech: ["React", "Node.js", "Tailwind"],
    demo: "https://billy-fullstack.vercel.app/",
    code: "#",
    image: "/portfolio-image.png",
  },
  {
    title: "Plateforme d'affiliation",
    desc: "Solution e-commerce affiliée avec le même stack que le site e-commerce principal.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://affinatesale.vercel.app/",
    code: "#",
    image: "/affinatesale.png",
  },
  {
    title: "EduTrack Mobile",
    desc: "Appli mobile Firebase pour e-learning : chat, certificats, progression et notifications.",
    tech: ["Firebase", "React Native", "Realtime DB"],
    demo: "https://com-billydoumbouya-edutrack.en.uptodown.com/android",
    code: "#",
    isDownload: true,
    image: "/edutrack.png",
  },
];

// ... (tes imports et ton tableau projects restent les mêmes)

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        {/* ... (Header de la section inchangé) */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              // ... (tes animations motion restent identiques)
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-brandCyan/50 transition-all z-10"
            >
              <div className="aspect-video bg-gradient-to-br from-brandCyan/20 to-brandViolet/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 relative z-20">
                {" "}
                {/* Ajout de z-20 ici pour passer devant l'overlay */}
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
                <div className="flex gap-4 flex-wrap">
                  {/* Utilisation de balise <a> pour une meilleure accessibilité */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brandCyan hover:text-white transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    {project.isDownload ? "Télécharger" : "Démo"}
                  </a>

                  {project.code && project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* L'OVERLAY : Ajout de pointer-events-none est CRUCIAL */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
