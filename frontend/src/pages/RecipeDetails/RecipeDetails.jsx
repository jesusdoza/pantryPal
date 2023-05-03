import React, { useRef, useState, useEffect } from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import { Details } from './RecipeDetails.style';
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEgg, faHeart } from '@fortawesome/free-solid-svg-icons'


export default function RecipeDetails() {
  
  const location = useLocation();
  const recipeData = location.state?.recipe;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = document.cookie.split(';').some((c) => c.trim().startsWith('loggedIn='));
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);


  const recipeType = recipeData.dishTypes.map(type => {
    return <li key={uuidv4()}>{type}</li>
  })
  const ingredientName = recipeData.extendedIngredients.map(ingredient => {
    return <li key={uuidv4()}>{ingredient.amount} {ingredient.unit}  <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}></img> {ingredient.name}</li>})
  
  console.log(recipeData);


  const instructionStep = recipeData.analyzedInstructions[0].steps.map(instruction => {
    return <li key={uuidv4()}>{instruction.step}</li>})

    const strippedString = recipeData.summary.replace(/<.*?>/g, '');
      const ingredientLength = recipeData.extendedIngredients.length
  const likes = recipeData.aggregateLikes
  const recipeDiets = recipeData.diets.map((item) => {
    return <li key={uuidv4()}>{item}</li>
  })

  return (
    <Details>
      <div className='recipeContainer'>
        <div className='recipeImgContainer'>
          <div className='imageContainer'>
          <img 
            className='recipeImg'
            src={recipeData.image} 
            alt={recipeData.title} 
            />
            
            <button className='saveBtn'><FontAwesomeIcon icon={faHeart} className='saveIcon'/></button>
          </div>


            <section className='recipeDetails'>
              <div className='titleContainer'>
                <h1 className='recipeTitle'>{recipeData.title}</h1>
                
              </div>

              <div className='quickInfoContainer'>
                <section className='quickInfoItem'>
                <FontAwesomeIcon icon={faClock} className='quickIcon'/>
                
                  <h2 className='recipeTime'>{recipeData.readyInMinutes} minutes</h2>
                </section>
              <section>
              <FontAwesomeIcon icon={faEgg} className='quickIcon'/>
              <h2 className='recipeTime'>{ingredientLength} Ingredients</h2>
              </section>
              
              <section>
              <FontAwesomeIcon icon={faHeart} className='quickIcon'/>
              <h2 className='recipeTime'>{likes} Likes</h2>
              </section>
              </div>

              <section className='recipeSummary'>
                <p>{strippedString}</p>
              </section>
              
              <section className='recipeTags'>
                <div className='recipeCategory'>
                  {recipeType}
                </div>
                <div className='recipeDiets'>
                  {recipeDiets}
                </div>
              </section>
            </section>
            
        </div>


        <div className='recipeHead'>


        <div className='recipeStart'>

          <div className='ingredientCard'>
              <h2>Servings: {recipeData.servings}</h2>
              <input type="number" placeholder={recipeData.servings}/>
              <h2>What you'll need:</h2>
            <div className='recipeIngredient'>
              {ingredientName}
            </div>
          </div>
        </div>
      </div>

        <div className='instructionsCard'>
        <h2>{recipeData.title}</h2>

        <div className='instructionContainer'>
        <div>
        <img 
            className='instructionImg'
            src={recipeData.image} 
            alt={recipeData.title} 
          />
        </div>


          <div className='recipeInstructions'>
            <h2>Instructions:</h2>
            <ol>
            {instructionStep}
            </ol>
          </div>
        </div>


        </div>
      </div>
    </Details>
  )
}