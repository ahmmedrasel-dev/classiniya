import { RouterProvider } from "react-router";
import Navbar from "./components/Shared/Navbar/Navbar";
import Router from "./Routes/Routes";

function App() {
  return (
    <>
      <Navbar>
      </Navbar>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
