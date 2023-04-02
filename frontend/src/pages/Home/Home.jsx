import React from 'react';
import JustEgg from '../../assets/JustEgg.png';
import PantryPalText from '../../assets/PantryPalText.png'
import { ImgContainer } from './Home.styles';



const Home = () => {



  return (

    <ImgContainer>

      <h1>Find recipes | Meal Plan</h1>
      <img className="logo" src={JustEgg} alt="Egg"></img>
      <img className="logoText" src={PantryPalText} alt="PantryPal"></img>

    </ImgContainer>

  )
}

export default Home;
