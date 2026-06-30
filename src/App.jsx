import { useState } from "react";
import Header from "./components/Header";
import Caraousel from "./components/Caraousel";
import Search from "./components/Search";
import Car from "./components/Car";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Header />
      <Caraousel />
      <Search />
      <Car />
      <Footer />
    </main>
  );
}

export default App;
