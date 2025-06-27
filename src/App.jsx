import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
  <>  

    <nav className="sticky top-0 z-50 w-full py-4 px-4 flex justify-center bg-[#fff1f5]">
      <div className="flex space-x-10 items-center font-serif text-[#be185d] text-md font-semibold">
        {["Home", "About Us", "Our Mission", "Programs", "Gallery"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            className="relative group"
          >
            <span>{item}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#be185d] group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </nav>


    


    <main className="text-gray-800">


      {/* Hero Section with Full Image */}
      <section id="home" className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center" 
      style={{ backgroundImage: "url('/assets/NIA.png')" }}>
        <motion.img
          src="/assets/empower-her.png"
          alt="Nia & Co. Logo"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Text Content BELOW Image */}
      <section id="about-us" className="text-center max-w-6xl mx-auto px-10 py-20 mb-15 mt-5">
        <motion.h1
          className="text-4xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Empower Her. Uplift Generations
        </motion.h1>
        <br />
        <p className="text-l font-sans mb-10">
          We champion women and children in marginalized areas through education, healthcare and economic empowerment.
          <br /><br />
          At our core, we are more than an organization — we are a home, a revolution in fierce purpose, where femininity is not weakness but a superpower.
          <br /><br />
          Our community is a sisterhood. A sanctuary. A celebration of all the ways women rise — boldly, slowly, painfully, joyfully.
          We’re here to remind her: You are powerful. You are worthy. You are not alone.
          <br /><br />
        </p>
        
        <a
          href="#donate"
          className="inline-block bg-[#d43790] hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-lg transition"
        >
          Donate Now
        </a>
      </section>

      <section id="our-mission" className="container mx-auto px-4 py-16 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">Our Mission</h2>
        <p className="leading-relaxed mb-4">
          We believe empowered women transform communities. By providing access
          to quality education, reproductive health services, and
          micro‑entrepreneurship training, we equip mothers and children with
          tools to break the cycle of poverty.
        </p>
        <p className="leading-relaxed mb-4">
          Our programs currently reach <strong>12 rural counties</strong> across
          Kenya and have impacted <strong>25,000+ beneficiaries</strong> since
          2022.
        </p>
        <p className="leading-relaxed mb-4">
          At <strong>Empower Her</strong>, we do not believe in “saving” women — we believe in resourcing them. Our work is rooted in dignity, led by love, and driven by a fierce belief that when women thrive, entire communities thrive. We center softness and strategy in equal measure — blending trauma-informed care with real-world skills that open doors.
        </p>
        <p className="leading-relaxed mb-4">
          From rural schoolgirls resisting early marriage to young mothers building businesses from their homes, our community is writing new narratives daily. Every training session, safe space, and healing circle is a step toward reclaiming identity, independence, and infinite possibility.
        </p>
        <p className="leading-relaxed mb-4">
          Our mission is intersectional, Afro-feminist, and radically local. We uplift women’s voices, bodies, businesses, and dreams — because they matter, and because they’re enough. We aren’t just creating programs — we’re cultivating futures where no girl has to shrink, apologize, or suffer in silence ever again.
        </p>
        <p>
          We are a movement of soft power, smart leadership, and soul-deep connection. And this is just the beginning.
        </p>
  
      </section>



      {/* Programs */}
      <section id="programs" className="bg-[#fff1f5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center font-serif">Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Access",
                desc: "We fund scholarships, school supplies, and mentorship for girls at risk of dropping out due to poverty, pregnancy, or crisis — because education should never be optional.",
              },
              {
                title: "Maternal Health Clinics",
                desc: "Community-based clinics and mobile wellness days focused on prenatal care, postpartum mental health, safe birthing practices, and support for young moms.",
              },
              {
                title: "Women in Business",
                desc: "Coaching, funding, branding, and digital skills to help women launch and scale soul-led businesses that thrive with confidence and community support.",
              },
              {
                title: "Empower Her Teen Mentorship",
                desc: "A guided journey for girls aged 13–19 to explore leadership, menstrual health, and purpose.",
              },
              {
                title: "HER Voice: Storytelling Studio",
                desc: "A creative storytelling lab where women learn to tell their truths through poetry, film, and spoken word.",
              },
              {
                title: "Digital Girl Initiative",
                desc: "From online safety to tech careers, we equip girls with digital confidence and content creation tools.",
              },
              {
                title: "Mental Health & Self-Love",
                desc: "Therapist-led support circles, healing toolkits, and self-love workbooks designed for the modern woman.",
              },
              {
                title: "Financial Empowerment Labs",
                desc: "Workshops that demystify money: budgeting, saving, investing, and turning side hustles into empires."
              },
              {
                title: "Sister Circles",
                desc: "Restorative spaces where women gather monthly to heal, journal, and share their journeys — held in softness and radical love.",
              }
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
      <section id="gallery" className="container mx-auto px-4 py-16" id="gallery">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">Impact Gallery</h2>
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
      <section className="bg-[#d43790] py-14 text-center text-white" id="donate">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to change lives?
        </h2>
        <p className="mb-6">Your contribution provides hope and opportunity.</p>
        <a
          href=""
          className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Give Today
        </a>
      </section>
    </main>

  </>  
  );
}

export default App;
