import { Fade } from "react-awesome-reveal";

export function CTASection() {
  return (
    <section className="mt-24">
      <Fade triggerOnce delay={300}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 p-10 text-white shadow-xl sm:p-14">
          {/* Soft glow effects */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            {/* TEXT */}
            <div className={"pb-6"}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                Bepul maslahat
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Interyeringiz uchun mos kolleksiyani birga tanlaymiz
              </h2>

              <p className="mt-4 max-w-2xl text-white/90 text-base">
                Dizaynerimiz bilan bog‘laning va xonangiz o‘lchamiga mos,
                estetik va uzoq xizmat qiladigan mebel yechimini oling.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3 font-semibold text-amber-600 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Uchrashuv belgilash
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/60 px-7 py-3 font-medium text-white transition duration-300 hover:bg-white/20"
              >
                Katalogni ko‘rish
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
