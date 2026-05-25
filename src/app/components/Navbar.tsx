import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 flex items-center justify-center text-white font-bold text-2xl">
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

        <nav className="hidden md:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}