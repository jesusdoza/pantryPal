import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";



export default function RelatedRecipe() {
  const [listOfRelated, setRelatedRecipe] = useState([])
  
  const location = useLocation();
  const recipeData = location.state?.recipe.id;
  getRelated()
  
  async function getRelated() {
  try {
    const related = await axios.get(
        "http://localhost:4000/api/relatedrecipe",
        {
            params: {
                recipeData: recipeData,
            },
        }
    );

    const idOfRelated = related.data.map((item) =>item.id)
    console.log(`These are the results as a list${idOfRelated}`);
    setRelatedRecipe(idOfRelated);
      }catch (err) {
    console.log(err);;
  }
}

  return (
    <div>
      <h1>{listOfRelated}</h1>
      
    </div>
  )
};
