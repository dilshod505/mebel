const links = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              <span className="font-display text-amber-600">Sof</span> Mebel
            </h3>

            <div className="mt-4 h-1 w-14 rounded-full bg-amber-500" />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-600">
              Premium interyer uchun zamonaviy va nafis mebel yechimlari. Har
              bir detal estetik va uzoq xizmat qilish uchun yaratiladi.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900">
              Navigatsiya
            </h4>

            <nav className="mt-6 flex flex-col gap-3 text-sm text-gray-600">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative w-fit transition duration-300 hover:text-amber-600"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT / CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900">
              Aloqa
            </h4>

            <p className="mt-6 text-sm text-gray-600">
              Savollaringiz bormi? Biz bilan bog‘laning.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-amber-600 hover:shadow-lg"
            >
              Bog‘lanish
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sof Mebel. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
