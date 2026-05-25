import Link from "next/link";

export default function HomePage() {

  const services = [
    {
      title: "Household Relocation",
      image:
        "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Safe and secure shifting services for homes with professional packing and transportation.",
    },

    {
      title: "Office Relocation",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      description:
        "Efficient office moving solutions with minimal downtime and complete safety.",
    },

    {
      title: "Transport Services",
      image:
        "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1200&auto=format&fit=crop",
      description:
        "Reliable logistics and transportation services across India with timely delivery.",
    },

    {
      title: "Warehouse Services",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      description:
        "Modern storage and warehouse facilities with complete security and monitoring.",
    },
  ];

  return (

    <main className="bg-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center">

        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Truck"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-40 w-full">

          <div className="max-w-3xl">

            <div className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full mb-8 font-semibold text-sm tracking-wide">
              WELCOME TO HITECK TRANSPORT
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">

              Trusted
              <span className="block text-orange-400">
                Transport &
              </span>

              Logistics Solutions

            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-9 mb-10">

              Hiteck Transport provides reliable relocation,
              warehouse and transportation services across India.

              We focus on safety, trust, fast delivery and complete
              customer satisfaction.

            </p>

            <div className="flex flex-col sm:flex-row gap-5">

              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-400 transition text-white px-8 py-5 rounded-2xl font-bold text-lg text-center"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="border border-white/20 bg-white/10 text-white px-8 py-5 rounded-2xl text-lg text-center"
              >
                Our Services
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] shadow-2xl w-full"
              alt="Warehouse"
            />

          </div>

          <div>

            <div className="text-orange-500 font-bold uppercase tracking-[3px] mb-5">
              ABOUT HITECK TRANSPORT
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">

              Delivering Excellence.
              <span className="block text-orange-500">
                Building Trust.
              </span>

            </h2>

            <p className="text-slate-600 text-lg leading-9 mb-6">

              Hiteck Transport has earned the trust of customers by
              delivering reliable and secure transport solutions across India.

              Our professional team ensures every shipment is handled with
              care and delivered safely.

            </p>

            <p className="text-slate-600 text-lg leading-9 mb-6">

              From household relocation to industrial logistics,
              we provide customized services based on customer requirements.

              Our commitment to punctuality, transparency and safety makes
              us a preferred transport partner.

            </p>

            <p className="text-slate-600 text-lg leading-9 mb-10">

              We believe transportation is not just moving goods —
              it is about delivering trust, reliability and peace of mind.

            </p>

            <Link
              href="/about"
              className="inline-block bg-slate-900 hover:bg-slate-800 transition text-white px-8 py-5 rounded-2xl font-bold"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="bg-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-20">

            <div className="text-orange-400 font-bold uppercase tracking-[3px] mb-5">
              OUR SERVICES
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              What We Provide
            </h2>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-9">

              We provide complete logistics and transport services
              with professionalism, safety and timely delivery.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={service.image}
                  className="h-64 w-full object-cover"
                  alt={service.title}
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-8">
                    {service.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[35px] shadow-2xl w-full"
              alt="Truck"
            />

          </div>

          <div>

            <div className="text-orange-500 font-bold uppercase tracking-[3px] mb-5">
              WHY CHOOSE US
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">

              Trusted By Customers
              <span className="block text-orange-500">
                Across India
              </span>

            </h2>

            <div className="space-y-8">

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Safe & Secure Delivery
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  Every shipment is handled carefully to ensure complete safety during transportation.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Experienced Team
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  Our professional staff ensures smooth operations and customer satisfaction.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Timely Service
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  We value your time and always focus on on-time pickup and delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="bg-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <div className="text-orange-400 font-bold uppercase tracking-[3px] mb-5">
            CUSTOMER TRUST
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

              <p className="text-slate-300 text-lg leading-9 mb-6">
                “Excellent transport service with timely delivery and professional support.”
              </p>

              <h3 className="text-orange-400 font-bold text-xl">
                Rahul Sharma
              </h3>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

              <p className="text-slate-300 text-lg leading-9 mb-6">
                “Very safe relocation experience and supportive team throughout the process.”
              </p>

              <h3 className="text-orange-400 font-bold text-xl">
                Priya Sahu
              </h3>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

              <p className="text-slate-300 text-lg leading-9 mb-6">
                “Reliable warehouse and transport solutions with affordable pricing.”
              </p>

              <h3 className="text-orange-400 font-bold text-xl">
                Anil Verma
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="relative py-24 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Truck"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">

            Ready To Move
            <span className="block text-orange-400">
              Your Goods Safely?
            </span>

          </h2>

          <p className="text-slate-300 text-xl leading-9 mb-10">

            Contact Hiteck Transport today and get professional transport and logistics services.

          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-400 transition text-white px-10 py-5 rounded-2xl font-bold text-xl"
          >
            Get A Free Quote
          </Link>

        </div>

      </section>

    </main>
  );
}
