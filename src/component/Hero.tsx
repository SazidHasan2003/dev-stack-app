import heroImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-356.25 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left  */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-slate-900 block">Build Your Ideal</span>
            <span className="bg-linear-to-r from-[#FF5E62] via-[#D91B7E] to-[#8A239B] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <button className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-linear-to-r from-[#FF5E62] via-[#D91B7E] to-[#8A239B] hover:opacity-90 rounded-xl transition duration-200 shadow-md cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-8 py-3.5 text-sm sm:text-base font-semibold text-slate-800 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl transition duration-200 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Development Stack Illustration"
            className="w-full max-w-125 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
