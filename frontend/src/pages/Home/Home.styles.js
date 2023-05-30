import styled from "styled-components";
import { device } from '../../components/mediaQ/device';

// Green
let primary = "#2C4001";
// Light Green
let secondary = "#D6D979";
// Cream
let lightCream = "#F2E7AE";
// Dark Brown
let darkBrown = "#59320F";
// light white
let highlight = "#F2F2F2";

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: ${primary};

    .about-container{
        width: 85%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
        background: ${highlight};
        border-radius: 15px;
        border: 1px solid ${primary};
        margin: 2em;
    }
    img {
        width: auto;
        height: 100%;
        max-height: 50vh;
    }
    .logo {
        margin: 1em auto;
        width: 50%;
    }
    p {
        margin: 0;
    }
    span {
        padding: 1em;
    }
    .linkContainer{
        display: flex;
        justify-content: center;
    }
    .linkItem{
        margin: 0 1em 1em;
        display: flex;
        justify-content: center;
        background: ${primary};
        color: ${highlight};
        border: 1px solid ${highlight};
        padding: .5em;
        border-radius: 5px;
    }
    .linkItem:hover {
        text-decoration: none;
        color: ${primary};
        background: ${lightCream};
        border: 1px solid ${primary};
    }
    h1 {
        font-size: 40px;
        color: #90ac14;
        text-decoration: none;
        margin: 0 auto;
    }
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1em;
    }

    ul {
        padding: .5em;
        margin: 0;
    }
    li {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: .3em;
    }
    .fontIcon {
        padding: 0 .3em
    }
    a {
        text-decoration: none;
        color: ${primary};
    }

    a:hover {
        text-decoration: underline;
    }

    .repo {
       display: flex;
       justify-content: center;
       align-items: center;
    }

    @media ${device.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${device.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${device.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${device.tablet} { 
        min-width: 425px;
        .about-container{
            max-width: 500px;
        }
        .logo{
            width: 40%;
        }
    }

`;