import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
}) => {
  return (
    <div className="mb-3 d-flex justify-content-center align-items-center">
      <input
        type="text"
        className="form-control"
        style={{ width: "20%", marginRight: "15px" }}
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="btn btn-primary mr-2"
        style={{ width: "7%", marginRight: "15px" }}
        onClick={onSearch}
      >
        Search
      </button>
      <button
        className="btn btn-secondary"
        style={{ width: "7%" }}
        disabled={searchQuery === ""}
        onClick={() => setSearchQuery("")}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
