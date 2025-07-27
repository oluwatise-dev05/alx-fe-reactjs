import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // Simulate delete operation
    console.log(`Recipe with ID ${id} deleted`);
    
    // Navigate to home page after deletion
    navigate('/');
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;

