import React, { useState } from "react";
import "./Post.css";

const Post = ({
  user,
  content,
  stats,
  onLike,
  onDislike,
  isLiked: initialLiked = false,
  isDisliked: initialDisliked = false,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [disliked, setDisliked] = useState(initialDisliked);
  const [likeCount, setLikeCount] = useState(stats.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(stats.dislikes || 0);
  const [commentCount, setCommentCount] = useState(stats.comments || 0);

  const displayName = user.isGeneric
    ? user.firstName
    : `${user.firstName || "Inconnu"} ${user.lastName || ""}`.trim() ||
      "Utilisateur inconnu";

  // gestion du like
  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount((d) => Math.max(0, d - 1));
    }
    const newLikeState = !liked;
    setLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : Math.max(0, prev - 1)));
    onLike && onLike(stats.id, newLikeState);
  };

  // gestion du dislike
  const handleDislike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => Math.max(0, prev - 1));
    }
    const newDislikeState = !disliked;
    setDisliked(newDislikeState);
    setDislikeCount((prev) =>
      newDislikeState ? prev + 1 : Math.max(0, prev - 1)
    );
    onDislike && onDislike(stats.id, newDislikeState);
  };

  // gestion du partage
  const handleShare = () => {
    const sharedPosts = JSON.parse(localStorage.getItem("sharedPosts") || "[]");
    if (!sharedPosts.some((p) => p.id === stats.id)) {
      sharedPosts.push({
        id: stats.id,
        content,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
        },
        sharedAt: new Date().toISOString(),
      });
      localStorage.setItem("sharedPosts", JSON.stringify(sharedPosts));
      alert("Post partagé et sauvegardé dans votre profil!");
    } else {
      alert("Ce post a déjà été partagé");
    }
  };

  // gestion des commentaires
  const handleComment = () => {
    // je rajouterais plus tard ez
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img
            src={user.image || "https://via.placeholder.com/50"}
            alt={user.firstName || "Utilisateur"}
            className="user-avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/50";
            }}
          />
          <div className="user-details">
            <h3 className="user-name">{displayName}</h3>
          </div>
        </div>
      </div>

      <div className="post-content">
        <p>{content}</p>
      </div>

      <div className="post-stats">
        <span className="stat">Vues: {stats.views || 0}</span>
      </div>

      <div className="post-actions">
        <button
          className={`action-button like-button ${liked ? "liked" : ""}`}
          onClick={handleLike}
          aria-label="J'aime"
        >
          👍 {likeCount}
        </button>
        <button
          className={`action-button dislike-button ${
            disliked ? "disliked" : ""
          }`}
          onClick={handleDislike}
          aria-label="Je n'aime pas"
        >
          👎 {dislikeCount}
        </button>
        <button
          className="action-button"
          onClick={handleComment}
          aria-label="Commenter"
        >
          💬 {commentCount} Commentaires
        </button>
        <button
          className="action-button"
          onClick={handleShare}
          aria-label="Partager"
        >
          📤 Partager
        </button>
      </div>
    </div>
  );
};

export default Post;
