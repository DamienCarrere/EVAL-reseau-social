import React from "react";

const PostStats = ({ views }) => {
  return (
    <div className="post-stats">
      <span className="stat">Vues: {views || 0}</span>
    </div>
  );
};

export default PostStats;
