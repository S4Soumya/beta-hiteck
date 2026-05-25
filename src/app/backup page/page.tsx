export default function Page() {
  const services = [
    {
      title: "Packers & Movers",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
      description:
        "Professional household and office shifting with secure transportation.",
    },

    {
      title: "Industrial Logistics",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      description:
        "Heavy transport and industrial logistics solutions across India.",
    },

    {
      title: "Warehouse Service",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
      description:
        "Modern warehouse and storage facilities with complete safety.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
              HT
            </div>

            <div>
              <h1 className="text-white font-bold text-xl">
                Hiteck Transport
              </h1>

              <p className="text-slate-300 text-sm">
                Packers • Movers • Logistics
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-white font-medium">

            <a href="#home" className="hover:text-sky-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-sky-400 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>

          </nav>
        </div>
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >

        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center pt-32">

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-sky-500/20 border border-sky-400/20 text-sky-300 mb-8 backdrop-blur-xl">
              India's Trusted Logistics Company
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-8">

              Fast & Secure

              <span className="block text-sky-400">
                Transport Solutions
              </span>

            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-10 max-w-2xl">

              Hiteck Packers & Movers provides professional transport,
              logistics, warehouse and relocation services across India.

            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 transition text-white font-semibold shadow-2xl"
              >
                Get Free Quote
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition"
              >
                Explore Services
              </a>

            </div>
          </div>

          <div className="relative hidden lg:block">

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-500/30 blur-3xl rounded-full" />

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-[650px] object-cover"
              />

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="bg-slate-950 py-32"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <div className="text-sky-400 font-semibold uppercase tracking-[4px] mb-5">
              Our Services
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Logistics Services We Provide
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:-translate-y-3 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-bold text-white mb-5">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-8 mb-8">
                    {service.description}
                  </p>

                  <button className="text-sky-400 font-semibold text-lg">
                    Read More →
                  </button>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-32 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <h2 className="text-5xl font-black mb-8">
              Contact Us
            </h2>

            <p className="text-slate-600 text-lg leading-9 mb-10">

              Need relocation or logistics support?
              Contact Hiteck Transport today.

            </p>

            <div className="space-y-5 text-lg">

              <p>
                📞 +91 9337176600
              </p>

              <p>
                📧 hiteck_packers@yahoo.com
              </p>

              <p>
                📍 Plot No- S3/96, Mancheswar Industrial Estate, Rasulgarh
              </p>

            </div>
          </div>

          <form className="bg-slate-50 p-10 rounded-[40px] shadow-2xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl border border-slate-200"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-5 rounded-2xl border border-slate-200"
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-5 rounded-2xl border border-slate-200 h-40"
            />

            <button className="w-full bg-sky-500 hover:bg-sky-400 transition text-white py-5 rounded-2xl font-semibold text-lg">
              Send Message
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}