import styled from "styled-components";
import SlateChilis from '../../assets/slateChilis.jpeg';

export const ImgContainer = styled.div`
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0; //comment this out if you want the image to show below the navbar
    left: 0;
    // z-index: -100;  //un-comment this if you want the navbar to show at the top


    background-image: url(${SlateChilis});
    background-size: cover;

    //any text you put inside the image div (like the <h1> <h2> and <h3> will need to have the position: relative; set on it
    //as well as set the z-index: -1 so that the text floats on top of the image. 
    h1 {

    }

    h2 {

    }

    h3 {
        
    }
`;