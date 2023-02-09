import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function AddIcon() {
  const [isClick, setIsClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleIcon = () => {
    setIsClick(!isClick);
  };

  const litenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >= heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", litenToScroll);
    return () => window.removeEventListener(litenToScroll);
  }, []);
  return (
    <>
      <button type="button" onClick={toggleIcon}>
        {isClick ? (
          <>
            {isVisible && <ScrollToTop />}
            <Link
              className="flex justify-center items-center text-xl bg-blue-800 hover:bg-blue-700 cursor-pointer w-12 h-12 rounded-full text-center p-3 fixed bottom-20 right-3 text-white shadow-md shadow-gray-400"
              to="/add"
            >
              <i className="fa-solid fa-plus"></i>
            </Link>
            <Link className="bg-blue-800 text-xl hover:bg-blue-700 cursor-pointer w-12 h-12 rounded-full text-center p-3 fixed bottom-4 right-3 text-slate-300 shadow-md shadow-gray-400">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </>
        ) : (
          <Link className="flex place-items-center flex-col bg-blue-800 hover:bg-blue-700 cursor-pointer w-12 h-12 rounded-full text-center p-2 fixed bottom-4 right-3 text-white shadow-sm shadow-gray-400">
            <i className="fa-solid fa-angle-up"></i>
            <i className="fa-solid fa-angle-down"></i>
          </Link>
        )}
      </button>
    </>
  );
}

export default AddIcon;
