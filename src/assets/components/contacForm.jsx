import { useState } from "react";

import { toast } from "sonner"; // Import de Sonner

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    need: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      toast.error("Le nom est trop court ✍️");
      return false;
    }
    // Regex pour les numéros guinéens (6XX XX XX XX)
    const phoneRegex = /^(\+224|00224|224)?(61|62|65|66)\d{7}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Numéro de téléphone invalide (Orange/MTN) 📞");
      return false;
    }
    if (formData.need.trim().length < 5) {
      toast.error("Dites-m'en un peu plus sur votre besoin 🙏");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const promise = fetch("https://formspree.io/f/xdayawvy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    toast.promise(promise, {
      loading: "Envoi de votre demande...",
      success: () => {
        setFormData({ name: "", phone: "", need: "" });
        setLoading(false);
        return "Demande envoyée ! Je vous recontacte vite. 🚀";
      },
      error: () => {
        setLoading(false);
        return "Erreur lors de l'envoi. Réessayez plus tard. ❌";
      },
    });
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="relative bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Parlons de votre projet 🚀
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Remplissez ce formulaire ou contactez-moi directement sur WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-brandCyan transition-all backdrop-blur-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Votre Téléphone (WhatsApp)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-brandCyan transition-all backdrop-blur-md"
          />

          <textarea
            name="need"
            placeholder="Votre besoin (Formation, Site web...)"
            rows="4"
            value={formData.need}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-brandCyan transition-all backdrop-blur-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-brandCyan to-brandViolet text-white font-bold rounded-xl transition-all transform hover:scale-[1.01] shadow-lg disabled:opacity-50"
          >
            {loading ? "Chargement..." : "Envoyer ma demande"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-8">
          <a
            href="https://wa.me/224623952011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandCyan hover:text-brandViolet transition-colors font-medium flex items-center justify-center gap-2"
          >
            Discuter directement sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
