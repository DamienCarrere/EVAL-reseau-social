import React from "react";
import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";
import { useReactions } from "../hooks/useReactions";
import { useSearch } from "../hooks/useSearch";
import Post from "../components/Posts/Post";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";
import LoadingError from "../layouts/LoadingError";
import "./Accueil.css";

const Accueil = () => {
  const { posts, loading: postsLoading, error: postsError } = usePosts();
  const {
    users,
    loading: usersLoading,
    error: usersError,
    getUserById,
  } = useUsers();
  const { likes, dislikes, handleLike, handleDislike } = useReactions();
  const { searchQuery, filteredUsers, filterUsers } = useSearch(users);

  const filteredPosts = React.useMemo(() => {
    if (!searchQuery.trim()) return posts;
    return posts.filter((post) => {
      const user = getUserById(post.userId);
      return filteredUsers.some((u) => u.id === user.id);
    });
  }, [posts, filteredUsers, searchQuery, getUserById]);

  return (
    <div className="home-container">
      <div className="home-header">
        <SearchBar value={searchQuery} onChange={filterUsers} />
      </div>

      <LoadingError
        loading={postsLoading || usersLoading}
        error={postsError || usersError}
      />

      <SearchResults filteredUsers={filteredUsers} searchQuery={searchQuery} />

      <div className="posts-container">
        {filteredPosts.length > 0 ? (
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
                isLiked={!!likes[post.id]}
                isDisliked={!!dislikes[post.id]}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            );
          })
        ) : (
          <div className="no-posts">
            {searchQuery.trim()
              ? "Aucun post trouvé pour les utilisateurs sélectionnés"
              : "Aucun post trouvé"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accueil;
