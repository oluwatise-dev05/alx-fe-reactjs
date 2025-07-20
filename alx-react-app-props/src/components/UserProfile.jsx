// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);

  return <UserInfo userData={userData} />;
}

export default UserProfile;


