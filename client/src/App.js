import {
  BrowserRouter as Router,
  Routes,
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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
