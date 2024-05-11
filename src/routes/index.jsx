import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import TebakAngka from "../pages/tebak-angka";
import Gallery from "../pages/gallery";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tebak-angka", element: <TebakAngka /> },
  { path: "/gallery", element: <Gallery /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
