import { Card } from './RecipeCard.styles.js';
import Cookies from "js-cookie";

const handleSave = () => {
  const loggedInData = Cookies.getJSON("loggedIn");
  const username = loggedInData ? loggedInData.username : null;
  console.log(username)
  if (!username) {
    alert("Please log in to save the recipe.");
    return;
  }

  fetch("http://localhost:4000/api/save-recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recipe }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Recipe saved successfully!");
      } else {
        throw new Error("Failed to save the recipe.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to save the recipe.");
    });
};


const RecipeCard = ({ recipe }) => {
  const removeHTMLTagsAndFilterText = (str) => {
    const cleanedText = str.replace(/<\/?[^>]+(>|$)/g, '');
    const cleanedText1 = cleanedText.split('If you like this recipe')[0];
    const filteredText = cleanedText1.replace('Credit:','');    
    return filteredText;
  };

  return (
    <Card>
      <div className="container">
        <img
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="card_body">
          <h1>{recipe.title}</h1>
          <p>
            {removeHTMLTagsAndFilterText(recipe.summary)}
            Credit: {recipe.creditText}
          </p>
          <div className="card_footer">
            <div className="card_footer_container">
              <h2>Dish type:</h2>
              <p> {recipe.dishTypes}</p>
            </div>
            <div className="card_footer_container">
              <h2>Servings:</h2>
              <p> {recipe.servings}</p>
            </div>
            <div className="card_footer_container">
              <h2>Total Time</h2>
              <p>{recipe.readyInMinutes}</p>
            </div>
            <div className="card_footer_container">
              <h2>Tags</h2>
              <p className='tag'>{recipe.dietary}</p>
            </div>
          </div>

          <button className="try_btn" src={recipe.sourceUrl}>Try it!</button>
          <button className="save_btn" onClick={handleSave}>Save it!</button>

        </div>
      </div>
    </Card>
  )

};


export default RecipeCard;
