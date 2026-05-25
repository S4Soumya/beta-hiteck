export default function ServicesPage() {
  const services = [
    {
      title: "Packers & Movers",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
      description:
        "Professional household and office shifting with secure transportation and relocation services.",
      link: "https://hiteckpackers.com/",
    },

    {
      title: "Industrial Logistics",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      description:
        "Heavy transport and industrial logistics solutions across India.",
      link: "#",
    },

    {
      title: "Warehouse Service",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
      description:
        "Modern warehouse and storage facilities with complete safety.",
      link: "#",
    },
  ];

  return (
    <main className="pt-32 bg-slate-950 min-h-screen">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-20">

          <div className="text-sky-400 font-semibold uppercase tracking-[4px] mb-5">
            Our Services
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Professional Logistics Solutions
          </h1>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto">
            Hiteck Transport provides secure, reliable and fast logistics,
            warehouse and relocation services across India.
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="grid lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <a
              key={service.title}
              href={service.link}
              target={
                service.link.startsWith("http")
                  ? "_blank"
                  : "_self"
              }
              className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:-translate-y-3 transition duration-500 block"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h2 className="text-3xl font-bold text-white mb-5">
                  {service.title}
                </h2>

                <p className="text-slate-400 leading-8 mb-8">
                  {service.description}
                </p>

                <div className="text-sky-400 font-semibold text-lg">
                  Read More →
                </div>

              </div>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}