import { RouterProvider } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import Router from "./Routes/Routes";

function App() {
  return (
    <>
      <ParallaxProvider>
        <RouterProvider router={Router} />
      </ParallaxProvider>
    </>
  );
}

export default App;
