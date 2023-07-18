import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TeamLayout from "./Components/TeamDetails/TeamLayout/TeamLayout";

function App() {
    const ref = useRef(null);
  return (
    <div ref={ref}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/teamDetails" exact element={<TeamLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
