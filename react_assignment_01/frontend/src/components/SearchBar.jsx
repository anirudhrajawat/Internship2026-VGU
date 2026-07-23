import { useState } from "react";

function SearchBar({ onSearch, onClear }) {
  const [text, setText] = useState("");

  const handleSearch = () => {
    if (text.trim() === "") {
      alert("please type a name to search");
      return;
    }
    onSearch(text);
  };

  const handleClear = () => {
    setText("");
    onClear();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default SearchBar;
