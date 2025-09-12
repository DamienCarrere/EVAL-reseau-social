import React from "react";
import UserCard from "../Users/UserCard";
import "./SearchBar.css";

const SearchResults = ({ filteredUsers, searchQuery }) => {
  if (!searchQuery.trim()) return null;

  return (
    <div className="search-results-container">
      <h2>Résultats de la recherche</h2>
      <div className="users-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>Aucun utilisateur trouvé pour "{searchQuery}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
