import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { RouterProvider } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import Router from "./Routes/Routes";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);


  return (
    <>
      <ParallaxProvider>
        <div className="fixed -right-10 top-2/4 rotate-90 z-50">
          <button className="btn bg-slate-100 hover:bg-[#05264e] dark:bg-[#05264e] gap-2 md:btn-md btn-sm rounded-full hover:text-white">
            <FiSun className="dark:text-white text-gray-800" />
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle toggle-xs sm:toogle-sm md:toogle-md lg:toggle-md" onClick={() => setIsDarkMode(!isDarkMode)} />
            </label>
            <BsFillMoonFill className="-rotate-90 dark:text-white text-gray-800" />
          </button>
        </div>
        <RouterProvider router={Router} />
      </ParallaxProvider>
    </>
  );
}

export default App;
