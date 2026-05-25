export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Hiteck Transport
          </h2>

          <p className="text-slate-400 leading-8">
            Plot No- S3/96,
            Mancheswar Industrial Estate,
            Rasulgarh
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-slate-400">
            +91 9337176600
          </p>

          <p className="text-slate-400">
            hiteck_packers@yahoo.com
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Services
          </h2>

          <p className="text-slate-400">
            Packers & Movers
          </p>

          <p className="text-slate-400">
            Warehouse Services
          </p>

          <p className="text-slate-400">
            Industrial Logistics
          </p>
        </div>
      </div>
    </footer>
  );
}