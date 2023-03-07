import React from 'react';
import { Card } from './RecipeCard.styles.js';


const RecipeCard = ({ recipes }) => {

  if (!recipes.length) {
    return <h3>No recipes match - adjust search criteria!</h3>;
  }

  return (
    <Card>
      <img>{recipeImg}</img>
      <div className='recipeName'>
        <h2>{recipeName}</h2>
      </div>
      <button className="save">Save</button>
      <div>
        <ul></ul>
      </div>

    </Card>

  )

};

export default RecipeCard;