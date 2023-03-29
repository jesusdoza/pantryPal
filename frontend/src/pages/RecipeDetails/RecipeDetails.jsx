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
    return <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>})

  const instructionStep = recipeData.analyzedInstructions[0].steps.map(instruction => {
    console.log(instruction.step);
    return <li>{instruction.step}</li>})

  return (
    <Details>
    <div>
      <h1 className='title'>{recipeData.title}</h1>
    </div>
    <div className='recipeDetails'>
      <h2>Ready in {recipeData.readyInMinutes} minutes</h2>
    </div>

    <div className='recipeHeader'>
      <img 
      className='recipeImg'
      src={recipeData.image} 
      alt={recipeData.title} 
      />
      <div>
      <h2 className='recipeIngredient'>What you'll need:</h2>
      {ingredientName}
      </div>
    </div>

    <div>
      <h2>Instructions:</h2>
      <ol>
      {instructionStep}
      </ol>
    </div>
    </Details>
  )
}