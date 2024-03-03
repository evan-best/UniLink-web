import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="getstarted" element={<GetStarted />} />
      <Route path="about" element={<About />} />
      <Route path="support" element={<Support />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
