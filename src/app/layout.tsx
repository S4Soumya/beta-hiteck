import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Hiteck Transport | Packers Movers Logistics",
  description:
    "Professional transport, relocation and logistics services across India.",
  keywords:
    "transport, logistics, packers movers, warehouse, relocation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {/* NAVBAR */}

        <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

          <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-4"
            >

              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />

              <div>

                <h1 className="text-white text-xl md:text-3xl font-black leading-none">
                  Hiteck Transport
                </h1>

                <p className="text-slate-400 text-xs md:text-sm mt-1 uppercase tracking-[2px]">
                  Packers • Movers • Logistics
                </p>

              </div>

            </Link>

            {/* DESKTOP MENU */}

            <nav className="hidden md:flex items-center gap-10 text-white font-medium">

              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-orange-400 transition">
                About
              </Link>

              <Link href="/services" className="hover:text-orange-400 transition">
                Services
              </Link>

              <Link href="/contact" className="hover:text-orange-400 transition">
                Contact
              </Link>

            </nav>

          </div>

        </header>

        {/* PAGE CONTENT */}

        {children}

        {/* WHATSAPP FLOATING BUTTON */}

        <a
          href="https://wa.me/919337176600"
          target="_blank"
          className="fixed bottom-5 right-5 z-50"
        >

          <div className="bg-green-500 hover:bg-green-400 transition w-16 h-16 rounded-full flex items-center justify-center shadow-2xl">

            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              className="w-9 h-9"
              alt="WhatsApp"
            />

          </div>

        </a>

        {/* MOBILE ACTION BAR */}

        <div className="fixed bottom-0 left-0 w-full bg-slate-950 border-t border-white/10 md:hidden z-40">

          <div className="grid grid-cols-3 text-center">

            <a
              href="tel:9337176600"
              className="py-4 text-white font-semibold"
            >
              Call
            </a>

            <a
              href="https://wa.me/919337176600"
              target="_blank"
              className="py-4 text-green-400 font-semibold border-x border-white/10"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="py-4 text-orange-400 font-semibold"
            >
              Quote
            </Link>

          </div>

        </div>

      </body>

    </html>
  );
}