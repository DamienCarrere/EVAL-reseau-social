import React from "react";
import "./SortOptions.css";

const SortOptions = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-options">
      <label htmlFor="sort-by">⚙️</label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="recent">Récents</option>
        <option value="views">Vues</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  );
};

export default SortOptions;
