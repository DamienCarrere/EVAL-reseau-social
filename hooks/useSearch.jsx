import { useState, useCallback } from "react";

export const useSearch = (users) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const filterUsers = useCallback(
    (query) => {
      const normalizedQuery = query.trim().toLowerCase();
      if (!normalizedQuery) {
        setFilteredUsers(users);
        setSearchQuery(query);
        return;
      }
      const filtered = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return (
          user.firstName.toLowerCase().includes(normalizedQuery) ||
          user.lastName.toLowerCase().includes(normalizedQuery) ||
          user.email.toLowerCase().includes(normalizedQuery) ||
          fullName.includes(normalizedQuery)
        );
      });
      setFilteredUsers(filtered);
      setSearchQuery(query);
    },
    [users]
  );

  return { searchQuery, filteredUsers, filterUsers };
};
