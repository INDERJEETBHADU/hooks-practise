import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserProfile;
