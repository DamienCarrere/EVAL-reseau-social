import React, { useState, useEffect, useCallback, useMemo } from "react";
import Post from "../components/Post";
import "./Accueil.css";

const Accueil = () => {
  const [state, setState] = useState({
    posts: [],
    users: [],
    usersMap: {},
    loading: true,
    error: null,
    searchQuery: "",
    filteredUsers: [],
    likes: {},
    dislikes: {},
  });

  // fonction pour mettre à jour l'état
  const updateState = useCallback((updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  // chargement des réactions depuis localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes") || "{}");
    const savedDislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    updateState({ likes: savedLikes, dislikes: savedDislikes });
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(state.likes));
    localStorage.setItem("dislikes", JSON.stringify(state.dislikes));
  }, [state.likes, state.dislikes]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateState({ loading: true, error: null });
        const [postsResponse, usersResponse] = await Promise.all([
          fetch("https://dummyjson.com/posts?limit=30"),
          fetch("https://dummyjson.com/users?limit=100"),
        ]);

        // vérification des réponses
        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        // on parse les données
        const [postsData, usersData] = await Promise.all([
          postsResponse.json(),
          usersResponse.json(),
        ]);

        // création d'une map des utilisateurs
        const usersMap = usersData.users.reduce((map, user) => {
          map[user.id] = user;
          return map;
        }, {});

        // mise à jour de l'état avec les données récupérées
        updateState({
          posts: postsData.posts,
          users: usersData.users,
          usersMap,
          loading: false,
          filteredUsers: usersData.users,
        });
      } catch (err) {
        // gestion des erreurs
        updateState({
          error: err.message,
          loading: false,
        });
        console.error("Erreur de chargement:", err);
      }
    };

    fetchData();
  }, []);

  // obtenir un utilisateur par son ID
  const getUserById = useCallback(
    (userId) => {
      if (!userId) {
        console.warn("Post sans userId");
        return createGenericUser(userId);
      }
      const user = state.usersMap[userId];
      return user ? { ...user, isGeneric: false } : createGenericUser(userId);
    },
    [state.usersMap]
  );

  // fonction utilitaire pour créer un utilisateur
  const createGenericUser = (userId) => {
    console.warn(
      `Utilisateur avec ID ${userId} non trouvé, création d'un utilisateur`
    );
    return {
      id: userId,
      firstName: `Utilisateur`,
      lastName: `#${userId}`,
      image: `https://i.pravatar.cc/150?img=${userId % 70}`,
      isGeneric: true,
    };
  };

  // fonction pour filtrer les utilisateurs en fonction de la recherche
  const filterUsers = useCallback(
    (query) => {
      const normalizedQuery = query.trim().toLowerCase();

      // si la requête est vide, réinitialiser les utilisateurs filtrés
      if (!normalizedQuery) {
        updateState({
          filteredUsers: state.users,
          searchQuery: query,
        });
        return;
      }

      // filtrage des utilisateurs selon ce qui est tapé
      const filtered = state.users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return (
          user.firstName.toLowerCase().includes(normalizedQuery) ||
          user.lastName.toLowerCase().includes(normalizedQuery) ||
          user.email.toLowerCase().includes(normalizedQuery) ||
          fullName.includes(normalizedQuery)
        );
      });

      // mise à jour de l'état avec les utilisateurs filtrés
      updateState({
        filteredUsers: filtered,
        searchQuery: query,
      });
    },
    [state.users, updateState]
  );

  // gestion des likes avec basculement automatique des dislikes
  const handleLike = useCallback((postId, liked) => {
    updateState((prev) => {
      const newLikes = { ...prev.likes };

      if (liked) {
        newLikes[postId] = true;

        // si on like, on retire le dislike et ouais
        if (prev.dislikes[postId]) {
          const newDislikes = { ...prev.dislikes };
          delete newDislikes[postId];
          return { likes: newLikes, dislikes: newDislikes };
        }
      } else {
        delete newLikes[postId];
      }

      return { likes: newLikes };
    });
  }, []);

  // gestion des dislikes avec basculement automatique des likes c'est comme ça ici
  const handleDislike = useCallback((postId, disliked) => {
    updateState((prev) => {
      const newDislikes = { ...prev.dislikes };

      if (disliked) {
        newDislikes[postId] = true;

        // si on dislike, on retire le like mon reuf
        if (prev.likes[postId]) {
          const newLikes = { ...prev.likes };
          delete newLikes[postId];
          return { dislikes: newDislikes, likes: newLikes };
        }
      } else {
        delete newDislikes[postId];
      }

      return { dislikes: newDislikes };
    });
  }, []);

  // filtrage des posts en fonction de la recherche
  const filteredPosts = useMemo(() => {
    // si pas de recherche, retourner tous les posts
    if (!state.searchQuery.trim()) return state.posts;

    // sinon filtrer les posts selon les utilisateurs sélectionnés
    return state.posts.filter((post) => {
      const user = getUserById(post.userId);
      return state.filteredUsers.some((u) => u.id === user.id);
    });
  }, [state.posts, state.filteredUsers, state.searchQuery, getUserById]);

  // rendu des résultats de recherche
  const renderSearchResults = () => {
    // ne rien rendre si pas de recherche
    if (!state.searchQuery.trim()) return null;

    return (
      <div className="search-results-container">
        <h2>Résultats de la recherche</h2>
        <div className="users-list">
          {state.filteredUsers.length > 0 ? (
            // affichage des utilisateurs trouvés
            state.filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="user-avatar"
                />
                <div className="user-info">
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <p>{user.email}</p>
                </div>
              </div>
            ))
          ) : (
            // message si aucun utilisateur trouvé
            <p>Aucun utilisateur trouvé</p>
          )}
        </div>
      </div>
    );
  };

  // rendu des posts
  const renderPosts = () => {
    return (
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          // affichage des posts filtrés
          filteredPosts.map((post) => {
            const user = getUserById(post.userId);
            if (!user) return null;

            return (
              <Post
                key={post.id}
                user={user}
                content={post.body}
                stats={{
                  id: post.id,
                  views: post.views || Math.floor(Math.random() * 1000),
                  likes: post.reactions?.likes || 0,
                  dislikes: post.reactions?.dislikes || 0,
                  comments:
                    post.reactions?.comments || Math.floor(Math.random() * 50),
                }}
                isLiked={!!state.likes[post.id]}
                isDisliked={!!state.dislikes[post.id]}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            );
          })
        ) : (
          // message si aucun post trouvé
          <div className="no-posts">
            {state.searchQuery.trim()
              ? "Aucun post trouvé pour les utilisateurs sélectionnés"
              : "Aucun post trouvé"}
          </div>
        )}
      </div>
    );
  };

  // affichage pendant le chargement
  if (state.loading) {
    return <div className="loading-message">Chargement des posts...</div>;
  }

  // affichage en cas d'erreur
  if (state.error) {
    return <div className="error-message">Erreur: {state.error}</div>;
  }

  // rendu principal du composant
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            value={state.searchQuery}
            onChange={(e) => filterUsers(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      {renderSearchResults()}
      {renderPosts()}
    </div>
  );
};

export default Accueil;
