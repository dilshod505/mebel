import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function Hero() {
  return (
    <div>
      <section
        id="bosh-sahifa"
        className="mt-10 flex flex-col items-center justify-between gap-10 lg:flex-row"
      >
        {/* LEFT SIDE - TEXT */}
        <Fade triggerOnce direction="left" duration={600}>
          <div className="">
            <div className="w-full max-w-full sm:max-w-2xl">
              {/* Badge */}
              <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-600 sm:mb-6">
                Premium mebel showroom
              </p>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-snug text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
                Uyingizni <span className="text-amber-600">qulay</span> va{" "}
                <span className="text-amber-600">nafis</span> qiling
              </h1>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
                Sof Mebel bilan zamonaviy va sifatli mebellar orqali uyingizga
                yangi hayot bag‘ishlang.
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
                  <p className="text-2xl font-bold text-amber-600">500+</p>
                  <p className="mt-1 text-sm text-gray-500">Mahsulot</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
                  <p className="text-2xl font-bold text-amber-600">24/7</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Qo‘llab-quvvatlash
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
                  <p className="text-2xl font-bold text-amber-600">10 kun</p>
                  <p className="mt-1 text-sm text-gray-500">
                    O‘rtacha yetkazish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {/* RIGHT SIDE - IMAGE */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden">
          <Fade triggerOnce delay={300} duration={600}>
            <Image
              src="/images/real/hero.jpg"
              alt="Zamonaviy yashash xonasi"
              fill
              priority
              className="object-cover"
            />
          </Fade>
        </div>
      </section>
    </div>
  );
}
