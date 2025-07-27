import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Recipe Details for ID: {id}</h2>
      {/* Other details */}
      <DeleteRecipeButton recipeId={id} />
    </div>
  );
};

export default RecipeDetails;

