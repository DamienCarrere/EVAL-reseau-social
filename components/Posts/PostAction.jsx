import React from "react";

const PostActions = ({
  stats,
  liked,
  disliked,
  commentCount,
  onLike,
  onDislike,
  onComment,
  onShare,
}) => {
  return (
    <div className="post-actions">
      <button
        className={`action-button like-button ${liked ? "liked" : ""}`}
        onClick={onLike}
        aria-label="J'aime"
      >
        👍 {stats.likes || 0}
      </button>
      <button
        className={`action-button dislike-button ${disliked ? "disliked" : ""}`}
        onClick={onDislike}
        aria-label="Je n'aime pas"
      >
        👎 {stats.dislikes || 0}
      </button>
      <button
        className="action-button"
        onClick={onComment}
        aria-label="Commenter"
      >
        💬 {commentCount} Commentaires
      </button>
      <button className="action-button" onClick={onShare} aria-label="Partager">
        📤 Partager
      </button>
    </div>
  );
};

export default PostActions;
