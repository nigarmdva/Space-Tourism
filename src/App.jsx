import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home, Crew, Destination, Technology } from "./components/pages";
import Mars from "./components/pages/destination/Mars";
import Moon from "./components/pages/destination/Moon";
import Titan from "./components/pages/destination/Titan";
import Europa from "./components/pages/destination/Europa";
import Hourley from "./components/pages/crew/Hourley";
import Mark from "./components/pages/crew/Mark";
import Victor from "./components/pages/crew/Victor";
import Ansari from "./components/pages/crew/Ansari";
import Launch from "./components/pages/tech/Launch";
import Spaceport from "./components/pages/tech/Spaceport";
import Capsule from "./components/pages/tech/Capsule";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />}>
          <Route path="hourley" element={<Hourley />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
          <Route path="ansari" element={<Ansari />} />
        </Route>
        <Route path="/destination" element={<Destination />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/technology" element={<Technology />}>
          <Route path="launch" element={<Launch />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
