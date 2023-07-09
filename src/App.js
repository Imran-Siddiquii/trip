import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ContinentCity } from "./ContinentCity";
import { City } from "./City";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/continent/:id" exact element={<ContinentCity />} />
          <Route path="/continent/:id/:id" exact element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
