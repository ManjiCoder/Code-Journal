import React from "react";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div
      className="bg-blue-800 hover:bg-blue-700 cursor-pointer w-12 h-12 rounded-full text-center p-3 fixed bottom-36 right-3"
      onClick={scrollToTop}
    >
      <i className="scroll-to-top text-white text-2xl fa-solid fa-arrow-up"></i>
    </div>
  );
}

export default ScrollToTop;
