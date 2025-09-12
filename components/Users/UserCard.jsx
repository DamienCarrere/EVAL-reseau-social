import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
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
  );
};

export default UserCard;
