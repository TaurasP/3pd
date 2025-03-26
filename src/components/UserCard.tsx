import React from "react";
import { User } from "./User";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = React.memo(({ user }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title pb-2">{user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Address: {user.address}</p>
          <p className="card-text">City: {user.city}</p>
        </div>
      </div>
    </div>
  );
});

export default UserCard;
