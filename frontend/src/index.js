import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import "./App.css";
import "./index.css";
import Sulav from "./components/teamPages/Sulav";
import GraphAnimation from "./components/teamPages/GraphAnimation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sulav" element={<Sulav />} />
        <Route path="/test" element={<GraphAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
