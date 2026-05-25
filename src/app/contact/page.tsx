"use client";

import { useState } from "react";

export default function ContactPage() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {

        alert("Message Sent Successfully!");

        setName("");
        setPhone("");
        setMessage("");

      } else {

        alert("Failed To Send Message");

      }

    } catch (error) {

      alert("Something Went Wrong");

    }

    setLoading(false);
  }

  return (

    <main className="min-h-screen bg-slate-950 pt-36 pb-24 px-5 overflow-hidden">

      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full mb-6 font-semibold text-sm tracking-wide">
            CONTACT HITECK TRANSPORT
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">

            Let’s Move
            <span className="block text-orange-400">
              Your Goods Safely
            </span>

          </h1>

          <p className="text-slate-300 text-lg leading-9 mb-10">

            Get in touch with Hiteck Transport for trusted relocation,
            transport and logistics services across India.

          </p>

          <div className="space-y-6">

            {/* PHONE */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6">

              <h2 className="text-white text-2xl font-bold mb-3">
                Phone Number
              </h2>

              <p className="text-slate-300 text-lg">
                +91 9337176600
              </p>

            </div>

            {/* EMAIL */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6">

              <h2 className="text-white text-2xl font-bold mb-3">
                Email Address
              </h2>

              <p className="text-slate-300 text-lg break-all">
                hiteck_packers@yahoo.com
              </p>

            </div>

            {/* ADDRESS */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6">

              <h2 className="text-white text-2xl font-bold mb-3">
                Office Address
              </h2>

              <p className="text-slate-300 text-lg leading-8">

                Plot No- S3/96,
                Mancheswar Industrial Estate,
                Rasulgarh

              </p>

            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white rounded-[35px] shadow-2xl p-8 md:p-10">

          <div className="mb-8">

            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Send Inquiry
            </h2>

            <p className="text-slate-600 leading-8">
              Fill out the form and our team will contact you shortly.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}

            <div>

              <label className="block text-slate-900 font-bold mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-300 rounded-2xl p-5 text-slate-900 outline-none focus:border-orange-500"
                required
              />

            </div>

            {/* PHONE */}

            <div>

              <label className="block text-slate-900 font-bold mb-3">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-slate-300 rounded-2xl p-5 text-slate-900 outline-none focus:border-orange-500"
                required
              />

            </div>

            {/* MESSAGE */}

            <div>

              <label className="block text-slate-900 font-bold mb-3">
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-slate-300 rounded-2xl p-5 text-slate-900 h-40 outline-none focus:border-orange-500"
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 transition text-white py-5 rounded-2xl font-bold text-lg shadow-xl"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

          </form>

        </div>

      </section>

      {/* GOOGLE MAP */}

      <section className="mt-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-10">

            <div className="text-orange-400 font-bold uppercase tracking-[3px] mb-4">
              OUR LOCATION
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Find Us On Google Maps
            </h2>

            <p className="text-slate-400 text-lg">
              Visit our office directly using map navigation.
            </p>

          </div>

          <div className="rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Mancheswar+Industrial+Estate+Rasulgarh&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="w-full"
            ></iframe>

          </div>

        </div>

      </section>

    </main>
  );
}