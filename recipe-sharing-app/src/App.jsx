import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
};

export default App;

