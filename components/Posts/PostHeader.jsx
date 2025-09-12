import React from "react";

const PostHeader = ({ user }) => {
  const displayName = user.isGeneric
    ? user.firstName
    : `${user.firstName || "Inconnu"} ${user.lastName || ""}`.trim() ||
      "Utilisateur inconnu";

  return (
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
  );
};

export default PostHeader;
