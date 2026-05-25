export default function Loading() {

  return (

    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[9999]">

      <img
        src="/logo.png"
        alt="Hiteck Logo"
        className="w-40 animate-pulse mb-8"
      />

      <h1 className="text-white text-4xl font-black tracking-wide mb-4">
        Hiteck Transport
      </h1>

      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">

        <div className="h-full bg-orange-500 animate-[loading_2s_linear_infinite] w-1/2 rounded-full"></div>

      </div>

      <p className="text-slate-400 mt-6 text-lg">
        Loading Website...
      </p>

    </div>

  );
}