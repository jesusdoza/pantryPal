import { Card } from './RecipeCard.styles.js';



const RecipeCard = () => {


  return (

    <Card>
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
          alt="Cupcake"
        />
        <div className="card_body">
          <h1>Caramel Cake Cupcakes</h1>
          <div className="card_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
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