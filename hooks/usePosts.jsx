import { useState, useEffect, useCallback } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/posts?limit=30");
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des posts");
      const data = await response.json();
      setPosts(data.posts);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Erreur de chargement des posts:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
};
