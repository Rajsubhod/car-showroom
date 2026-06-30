import { useEffect, useState } from "react";
import Header from "./components/Header";
import Caraousel from "./components/Caraousel";
import Search from "./components/Search";
import Car from "./components/Car";
import Footer from "./components/Footer";
import { cars } from "./data/cars";

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);

  const filtered = cars.filter((c) => {
    const matchCategory = category === "All" || c.type === category;
    const q = search.trim().toLowerCase();
    const matchSearch = !q || c.carname.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  const visibleCars = filtered.slice(0, visible);

  useEffect(() => {
    setVisible(6)
  }, [search, category])

  console.log(filtered.length, " ", visible)

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
      <Car cars={visibleCars} />
      {visible < filtered.length && (
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-secondary"
            onClick={() => setVisible((prev) => prev + 3)}
          >
            Show More
          </button>
        </div>
      )}
      <Footer />
    </main>
  );
}

export default App;
