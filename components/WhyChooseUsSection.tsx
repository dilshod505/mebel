import { Fade } from "react-awesome-reveal";

const highlights = [
  {
    title: "Tabiiy materiallar",
    description:
      "Yog‘och, mato va aksessuarlar sifat nazoratidan o‘tgan premium materiallardan tanlanadi.",
  },
  {
    title: "Moslashtirilgan dizayn",
    description:
      "Har bir buyurtma interyer uslubingizga mos rang, o‘lcham va kompozitsiya bilan tayyorlanadi.",
  },
  {
    title: "Kafolat va servis",
    description:
      "Yetkazib berishdan keyin ham montaj va servis qo‘llab-quvvatlovi davom etadi.",
  },
];

const stats = [
  { value: "12+", label: "Yillik tajriba" },
  { value: "4.9", label: "Mijoz bahosi" },
  { value: "900+", label: "Tayyor loyiha" },
];

export function WhyChooseUsSection() {
  return (
    <section className="mt-24">
      <Fade triggerOnce delay={200}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 p-8 text-white shadow-2xl md:p-14">
          {/* Soft blur decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="relative z-10 grid gap-12 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div>
              <p className="inline-block rounded-full bg-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                Nega Sof Mebel
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Sifat, uslub va qulaylik bir joyda
              </h2>

              <div className="mt-8 space-y-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/15 p-6 backdrop-blur-md transition duration-300 hover:bg-white/25"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE STATS */}
            <div className="grid gap-6 self-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-5xl font-bold text-amber-600">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
