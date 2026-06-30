function Search({ category, setCategory, search, setSearch }) {
  const categories = ["All", "Hatchback", "Sedan", "SUV", "MUV", "Coupe"];

  return (
    <div className="bg-light p-3 my-3 rounded">
      <div
        className="d-flex align-items-center gap-2"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg> */}

        <select
          className="form-select"
          style={{ maxWidth: "180px" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search by company or model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
