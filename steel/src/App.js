import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./pages/home.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"*"} element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
