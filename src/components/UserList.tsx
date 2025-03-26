import React, { useState, useMemo } from "react";
import UserCard from "./UserCard";
import { User } from "./User";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 9;

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    return users.slice(startIndex, startIndex + usersPerPage);
  }, [currentPage, users]);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div>
      <div className="card-body">
        {users.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="row">
            {paginatedUsers.map((user) => (
              <UserCard key={user.email} user={user} />
            ))}
          </div>
        )}
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-secondary mr-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </button>
          <span style={{ marginRight: "15px", marginLeft: "15px" }}>
            {currentPage}
          </span>
          <button
            className="btn btn-secondary ml-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
