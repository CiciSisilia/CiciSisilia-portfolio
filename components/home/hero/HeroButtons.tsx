export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <button className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/50">
        Download CV
      </button>

      <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10">
        View Projects
      </button>

    </div>
  );
}