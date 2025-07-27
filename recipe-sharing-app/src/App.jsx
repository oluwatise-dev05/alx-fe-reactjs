import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<RecipeList recipes={recipes} />} />
    <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
    <Route path="/edit/:id" element={<EditRecipeForm recipes={recipes} />} />
    <Route path="/add" element={<AddRecipeForm />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;

