import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Details } from './RecipeDetails.style';



export default function RecipeDetails() {
  const location = useLocation();
  const recipeData = location.state?.recipe;

  const recipeType = recipeData.dishTypes.map(type => {
    return <li>{type}</li>
  })
  const ingredientName = recipeData.extendedIngredients.map(ingredient => {
    return <li>{ingredient.amount} {ingredient.unit}  <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}></img> {ingredient.name}</li>})


  const instructionStep = recipeData.analyzedInstructions[0].steps.map(instruction => {
    return <li>{instruction.step}</li>})

  return (
    <Details>
      <div className='recipeHeader'>
        <div>
          <h1 className='title'>{recipeData.title}</h1>
        </div>

        <div className='recipeTime'>
          <h2>Ready in {recipeData.readyInMinutes} minutes</h2>
        </div>

        <div className='recipeHead'>
          <div className='recipeCategory'>
          {recipeType}
        </div>

        <div className='recipeStart'>
          <div>
            <img 
            className='recipeImg'
            src={recipeData.image} 
            alt={recipeData.title} 
            />
          </div>

          <div className='ingredientCard'>
            <h2>What you'll need:</h2>
            <div className='recipeIngredient'>
              {ingredientName}
            </div>
          </div>
        </div>
      </div>

        <div className='instructionsCard'>
          <h2>Instructions:</h2>
          <ol>
          {instructionStep}
          </ol>
        </div>
      </div>
    </Details>
  )
}