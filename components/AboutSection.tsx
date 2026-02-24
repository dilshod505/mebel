import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function AboutSection() {
  return (
    <section id="biz-haqimizda" className="mt-24">
      <Fade triggerOnce delay={300}>
        <div className="items-center gap-12 rounded-3xl bg-white p-8 shadow-xl md:grid-cols-2 md:p-14">
          {/* LEFT SIDE */}
          <div>
            <p className="inline-block rounded-full bg-amber-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
              Biz haqimizda
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Har bir uy uchun <span className="text-amber-600">nafis</span> va{" "}
              <span className="text-amber-600">zamonaviy</span> yechim
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Biz mijozlarimizga sifatli, zamonaviy va uzoq xizmat qiladigan
              mebellarni taklif qilamiz. Har bir mahsulot estetik va qulaylikni
              birlashtiradi.
            </p>

            {/* FEATURES */}
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100">
                Yuqori sifat
              </span>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                Individual dizayn
              </span>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                Tez yetkazib berish
              </span>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative h-[350px] overflow-hidden mt-4 rounded-3xl md:h-[450px]">
            <Image
              src="/images/real/about.jpg"
              alt="Sifatli mebel kolleksiyasi"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
          </div>
        </div>
      </Fade>
    </section>
  );
}
