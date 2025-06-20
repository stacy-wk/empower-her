import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="bg-pink-100 py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Empower Her. Uplift Generations.
          </motion.h1>
          <p className="text-lg md:text-xl mb-8">
            We champion women and children in marginalized areas through
            education, healthcare and economic empowerment.
          </p>
          <a
            href="#donate"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-lg transition"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="leading-relaxed mb-4">
          We believe empowered women transform communities. By providing access
          to quality education, reproductive health services, and
          micro‑entrepreneurship training, we equip mothers and children with
          tools to break the cycle of poverty.
        </p>
        <p>
          Our programs currently reach <strong>12 rural counties</strong> across
          Kenya and have impacted <strong>25,000+ beneficiaries</strong> since
          2022.
        </p>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Access",
                desc: "Scholarships, mentorship & school supplies for girls.",
              },
              {
                title: "Maternal Health Clinics",
                desc: "Mobile clinics offering prenatal care and nutrition.",
              },
              {
                title: "Women in Business",
                desc: "Micro‑loans and skills workshops for budding entrepreneurs.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery Placeholder */}
      <section className="container mx-auto px-4 py-16" id="gallery">
        <h2 className="text-3xl font-bold mb-8">Impact Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/assets/emh1.jpg",
            "/assets/emh2.jpg",
            "/assets/emh3.jpg",
            "/assets/emh4.jpg",
            "/assets/emh5.jpg",
            "/assets/emh6.jpg"
          ].map((src, idx) => (
            <div key={idx} className="aspect-video overflow-hidden rounded-lg shadow">
              <img src={src} alt={`Impact ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-14 text-center text-white" id="donate">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to change lives?
        </h2>
        <p className="mb-6">Your contribution provides hope and opportunity.</p>
        <a
          href="#"
          className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Give Today
        </a>
      </section>
    </main>
  );
}

export default App;
