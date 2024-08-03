import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="w-full min-h-screen App bg-light max-w-7xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
