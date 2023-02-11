import { RouterProvider } from "react-router";
import Router from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
