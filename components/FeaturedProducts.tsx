"use client";

import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const products = [
  { name: "Qora divan", price: "$250", image: "/images/real/product-sofa.jpg" },
  { name: "Qora stul", price: "$100", image: "/images/real/product-chair.jpg" },
  {
    name: "Yumshoq kreslo",
    price: "$170",
    image: "/images/real/product-armchair.jpg",
  },
];

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className={"mt-32"}>
      <Fade triggerOnce delay={300}>
        <div className="mb-16 text-center">
          <p className="mx-auto inline-block rounded-full bg-amber-100 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Mahsulotlarimiz
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Har xil interyer{" "}
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
        <aside className="mt-16 rounded-3xl bg-white shadow-xl p-6 flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE - SELECTED IMAGE */}
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto rounded-2xl overflow-hidden">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              className="object-cover transition duration-500 rounded-2xl"
            />
          </div>

          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="flex flex-col justify-between w-full lg:w-1/2">
            {/* Selected product info */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {selectedProduct.name}
              </h3>
              <span className="text-xl font-bold text-amber-600">
                {selectedProduct.price}
              </span>
            </div>

            {/* Product list */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                Tanlangan mahsulotlar
              </p>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li
                    key={product.name}
                    onClick={() => setSelectedProduct(product)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 cursor-pointer transition duration-300 ${
                      selectedProduct.name === product.name
                        ? "bg-amber-100 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm text-gray-700">
                      {product.name}
                    </span>
                    <span className="text-sm font-semibold text-amber-600">
                      {product.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-6 w-full rounded-2xl bg-amber-500 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-amber-600"
            >
              Ko&apos;proq mahsulot
            </button>
          </div>
        </aside>
      </Fade>
    </div>
  );
}
