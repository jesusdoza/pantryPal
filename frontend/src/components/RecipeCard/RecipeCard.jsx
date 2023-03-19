import { Card } from './RecipeCard.styles.js';



const RecipeCard = ({ recipe }) => {
  console.log('this is recipe', recipe)
  console.log('this is image', recipe.image)
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
            {recipe.summary}
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

          <button className="btn" src={recipe.sourceUrl}>Try it!</button>

        </div>
      </div>
    </Card>
  )

};


export default RecipeCard;