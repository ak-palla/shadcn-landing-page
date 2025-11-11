"use client";

const sponsors = ["Groq", "Deepgram", "Cartesia"];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <h2 className="text-2xl md:text-3xl text-center mb-8 font-semibold">
        Powered by
      </h2>

      <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
        {sponsors.map((name) => (
          <div
            key={name}
            className="text-3xl md:text-4xl font-bold"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};
