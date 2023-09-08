import React from 'react';
import './App.css';

// organism
import RecipeCardList from './components/organism/RecipeCardList';

function App() {
  return (
    <div className="flex justify-center align-middle">
      <RecipeCardList />
    </div>
  );
}

export default App;
