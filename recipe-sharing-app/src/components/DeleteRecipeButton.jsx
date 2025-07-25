import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;

