import { Card } from './RecipeCard.styles.js';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';



const RecipeCard = (recipe) => {


  return (

    <Card>
      <div className="container">
        <img
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="card_body">
          <h1>{recipe.title}</h1>
          {/* <div className="card_star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div> */}
          <p>
            Recipe description goes here.
          </p>
          <div className="card_footer">
            <div className="card_footer_container">
              <h2>Prep:</h2>
              <p>30 min</p>
            </div>
            <div className="card_footer_container">
              <h2>Total Time</h2>
              <p>40 min</p>
            </div>
            <div className="card_footer_container">
              <h2>Tags</h2>
              <p className='tag'>Keto</p>
            </div>
            <div className="card_footer_container">
              <h2>Has searched ingredients:</h2>
              <p className='tag'>flour, eggs, sugar, salt, butter</p>
            </div>
          </div>


          <button className="btn">save recipe <i className="fa fa-arrow-right"></i></button>
        </div>
      </div>


    </Card>
  )

};


export default RecipeCard;