import { useState } from "react";
import Header from "./components/Header";
import Caraousel from "./components/Caraousel";
import Search from "./components/Search";
import Car from "./components/Car";
import Footer from "./components/Footer";
import { cars } from "./data/cars";

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = cars.filter((c) => {
    const matchCategory = category === "All" || c.type === category;
    const q = search.trim().toLowerCase();
    const matchSearch = !q || c.carname.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <main className="main">
      <Header />
      <Caraousel />
      <Search
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <Car cars={filtered} />
      <Footer />
    </main>
  );
}

export default App;
