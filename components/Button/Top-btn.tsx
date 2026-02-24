"use client";

import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full
                 bg-gradient-to-br from-amber-400 to-amber-500
                 text-white shadow-xl hover:from-amber-600 hover:to-amber-700
                 hover:scale-110 transition-transform duration-300 focus:outline-none"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default TopButton;
