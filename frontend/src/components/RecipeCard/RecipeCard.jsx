import React from 'react';
import { Card } from './RecipeCard.styles.js';
import Spoon from '../../assets/Spoon.png'



const RecipeCard = () => {

  return (

    <Card>
      <section>
        <h2>Recipe Title</h2>
        <img className="recipeImg" src={Spoon} alt="recipe image"></img>
      </section>
      <section>
        <h3>Ingredients:</h3>
        <ul>
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
        </ul>
      </section>
      <section>
        Recipe steps
      </section>


    </Card>
  )

};

export default RecipeCard;