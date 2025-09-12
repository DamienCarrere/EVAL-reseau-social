import { useState, useEffect, useCallback } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [usersMap, setUsersMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=30");
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des utilisateurs");
      const data = await response.json();
      setUsers(data.users);
      const map = data.users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      setUsersMap(map);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Erreur de chargement des utilisateurs:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const getUserById = useCallback(
    (userId) => {
      if (!userId) {
        console.warn("Post sans userId");
        return createGenericUser(userId);
      }
      return usersMap[userId] || createGenericUser(userId);
    },
    [usersMap]
  );

  const createGenericUser = (userId) => {
    console.warn(
      `Utilisateur avec ID ${userId} non trouvé, création d'un utilisateur lambda`
    );
    return {
      id: userId,
      firstName: `Utilisateur`,
      lastName: `#${userId}`,
      image: `https://i.pravatar.cc/150?img=${userId % 70}`,
      isGeneric: true,
    };
  };

  return { users, usersMap, loading, error, getUserById, refetch: fetchUsers };
};
