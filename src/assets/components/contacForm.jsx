import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    need: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto relative">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="relative bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Parlons de votre projet 🚀
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Remplissez ce formulaire ou contactez-moi directement sur WhatsApp
        </p>

        {success ? (
          <div className="text-center text-green-400 font-semibold text-lg">
            ✅ Demande envoyée avec succès !
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xdayawvy"
            method="POST"
            className="space-y-6"
            onSubmit={() => setLoading(true)}
          >
            {/* Nom */}
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-brandCyan focus:ring-2 focus:ring-brandCyan/30 outline-none transition-all backdrop-blur-md"
            />

            {/* Téléphone */}
            <input
              type="tel"
              name="phone"
              placeholder="Votre Téléphone (WhatsApp)"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-brandCyan focus:ring-2 focus:ring-brandCyan/30 outline-none transition-all backdrop-blur-md"
            />

            {/* Besoin */}
            <textarea
              name="need"
              placeholder="Votre besoin (Formation, Site web...)"
              rows="4"
              value={formData.need}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-brandCyan focus:ring-2 focus:ring-brandCyan/30 outline-none transition-all backdrop-blur-md"
            />

            {/* Bouton */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-brandCyan to-brandViolet text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:opacity-60"
            >
              {loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        )}

        {/* WhatsApp direct */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/224623952011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandCyan hover:underline font-medium"
          >
            Ou discuter directement sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
