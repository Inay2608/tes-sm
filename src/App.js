import { useEffect, useState } from "react";
import { getResto } from "./api";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/DetailResto";

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home/>}/>
          <Route path="/detail-resto/:id" element={< Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
