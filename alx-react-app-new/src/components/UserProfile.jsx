
import React from "react";

function UserProfile() {
  const userStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center"
  };

  return (
    <div style={userStyle}>
      <h2>User Name</h2>
      <p>This is the user profile section.</p>
    </div>
  );
}

export default UserProfile;


