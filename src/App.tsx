import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { generateFakeUsers, User } from "./components/User";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fakeUsers = generateFakeUsers(100).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(fakeUsers);
    setFilteredUsers(fakeUsers);
    setIsLoading(false);
  }, []);

  const handleSearch = useCallback(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(results);
    setCurrentPage(1);
  }, [users, searchQuery]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Users</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserList
          users={filteredUsers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
