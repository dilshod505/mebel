import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const collections = [
  {
    title: "Yashash xonasi",
    description: "Keng divanlar, zamonaviy stol va qulay kreslolar to‘plami.",
    image: "/images/real/collection-living.jpg",
  },
  {
    title: "Yotoqxona",
    description: "Dam olish uchun minimalist va nafis yotoqxona mebellari.",
    image: "/images/real/collection-bedroom.jpg",
  },
  {
    title: "Oshxona va ovqatlanish",
    description: "Issiq muhit yaratadigan stol-stul kombinatsiyalari.",
    image: "/images/real/collection-dining.jpg",
  },
];

export function CollectionsSection() {
  return (
    <section id="mebel" className="mt-10">
      <Fade triggerOnce delay={400}>
        <section className="relative mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl md:p-14">
            {/* Soft decorative blur */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

            {/* HEADER */}
            <div className="relative z-10 mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="inline-block rounded-full bg-amber-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
                  Kolleksiyalar
                </p>

                <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Har xona uchun <span className="text-amber-600">maxsus</span>{" "}
                  yechim
                </h2>
              </div>

              <a
                href="#"
                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-amber-500 hover:text-amber-600"
              >
                Barcha kolleksiyalar →
              </a>
            </div>

            {/* GRID */}
            <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {collections.map((collection, index) => (
                <article
                  key={collection.title}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Elegant number badge */}
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-800 shadow">
                      0{index + 1}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 transition group-hover:text-amber-600">
                      {collection.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-gray-600">
                      {collection.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Fade>
    </section>
  );
}
