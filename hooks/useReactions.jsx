import { useState, useEffect, useCallback } from "react";

export const useReactions = () => {
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes") || "{}");
    const savedDislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    setLikes(savedLikes);
    setDislikes(savedDislikes);
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
  }, [likes, dislikes]);

  const handleLike = useCallback(
    (postId, liked) => {
      setLikes((prev) => {
        const newLikes = { ...prev };
        if (liked) {
          newLikes[postId] = true;
        } else {
          delete newLikes[postId];
        }
        return newLikes;
      });
      if (liked && dislikes[postId]) {
        setDislikes((prev) => {
          const newDislikes = { ...prev };
          delete newDislikes[postId];
          return newDislikes;
        });
      }
    },
    [dislikes]
  );

  const handleDislike = useCallback(
    (postId, disliked) => {
      setDislikes((prev) => {
        const newDislikes = { ...prev };
        if (disliked) {
          newDislikes[postId] = true;
        } else {
          delete newDislikes[postId];
        }
        return newDislikes;
      });
      if (disliked && likes[postId]) {
        setLikes((prev) => {
          const newLikes = { ...prev };
          delete newLikes[postId];
          return newLikes;
        });
      }
    },
    [likes]
  );

  return { likes, dislikes, handleLike, handleDislike };
};
