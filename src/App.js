import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  WhatGTP3,
  Header,
  Features,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGTP3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
