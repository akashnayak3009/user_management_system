// UserProfile.js
import React, { useState, useEffect } from "react";
import '../styles/UserProfile.css'


function UserProfile() {
//   const [userProfiles, setUserProfiles] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     getUsers().then((data) => {
//       setUserProfiles(data);
//     });
//   }, []);

//   const filteredProfiles = userProfiles.filter((profile) =>
//     profile.username.toLowerCase().includes(searchText.toLowerCase())
//   );

  return (
    <div className="user-profile">
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Search by username"
        // value={searchText}
        // onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="user-list">
        
          <div  className="user-card">
            <h2></h2>
            <p>Email: </p>
            <p>Mobile: </p>
            <p>Biography:</p>
          </div>
      </div>
    </div>
  );
}

export default UserProfile;
