import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./features/home/Home";
import MacOs from "./features/macos/MacOs";
import { Modes } from "./components";
function App() {

  return (
    <BrowserRouter>
    <Modes/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac-os" element={<MacOs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
