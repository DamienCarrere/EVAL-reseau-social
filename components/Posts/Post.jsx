import { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostActions from "./PostAction";
import "./Post.css";

const Post = ({
  user,
  content,
  stats,
  onLike: externalOnLike,
  onDislike: externalOnDislike,
  isLiked: initialLiked = false,
  isDisliked: initialDisliked = false,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [disliked, setDisliked] = useState(initialDisliked);
  const [likeCount, setLikeCount] = useState(stats.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(stats.dislikes || 0);
  const [commentCount, setCommentCount] = useState(stats.comments || 0);

  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount((d) => Math.max(0, d - 1));
    }
    const newLikeState = !liked;
    setLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : Math.max(0, prev - 1)));
    externalOnLike && externalOnLike(stats.id, newLikeState);
  };

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
    externalOnDislike && externalOnDislike(stats.id, newDislikeState);
  };

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

  // Pour les coms, je ferais plus tard ez
  const handleComment = () => {
    // logique des coms
  };

  return (
    <div className="post-card">
      <PostHeader user={user} />
      <PostContent content={content} />
      <PostStats views={stats.views} />
      <PostActions
        stats={{ ...stats, likes: likeCount, dislikes: dislikeCount }}
        liked={liked}
        disliked={disliked}
        commentCount={commentCount}
        onLike={handleLike}
        onDislike={handleDislike}
        onComment={handleComment}
        onShare={handleShare}
      />
    </div>
  );
};

export default Post;
