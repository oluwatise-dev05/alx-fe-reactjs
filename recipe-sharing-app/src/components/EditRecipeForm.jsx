import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Edit Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;

