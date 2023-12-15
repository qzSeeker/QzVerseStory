import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Story from "./Components/Story/Story";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Horizontal from "./Components/HorizontalScroll/Horizontal";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Horizontal />}>
          <Route index element={<Home />}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
  );
}

export default App;
