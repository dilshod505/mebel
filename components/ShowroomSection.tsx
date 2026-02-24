import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const images = [
  {
    src: "/images/real/showroom-main.jpg",
    alt: "Premium showroom zonasi",
  },
  {
    src: "/images/real/showroom-side-1.jpg",
    alt: "Zamonaviy ovqatlanish zonasi",
  },
  {
    src: "/images/real/showroom-side-2.jpg",
    alt: "Minimalist mehmonxona interyeri",
  },
];

export function ShowroomSection() {
  return (
    <section id="aksessuarlar" className="mt-24">
      <Fade triggerOnce delay={300}>
        <div>
          {/* HEADER */}
          <div className="mb-16 text-center">
            <p className="mx-auto inline-block rounded-full bg-amber-100 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Showroom
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Jonli interyer{" "}
              <span className="relative text-amber-600">
                ilhomlari
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-amber-200" />
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Zamonaviy va nafis interyerlardan ilhom oling. Har bir detal
              qulaylik va estetikani birlashtiradi.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* LARGE IMAGE */}
            <div className="group relative min-h-[420px] overflow-hidden rounded-3xl md:col-span-2">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Elegant dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Label */}
              <p className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-gray-800 shadow">
                Luxury Living Line
              </p>
            </div>

            {/* SMALL IMAGES */}
            <div className="grid gap-6">
              {images.slice(1).map((image) => (
                <div
                  key={image.alt}
                  className="group relative min-h-[200px] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
