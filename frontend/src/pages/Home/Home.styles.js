import styled from "styled-components";
import { device } from '../../components/mediaQ/device';

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    img {
        width: auto;
        height: 100%;
        max-height: 50vh;
    }
    .logo {
        width: 50%;
    }
    .linkContainer{
        display: flex;
        justify-content: center;
    }
    .linkItem{
        padding: 0 2em;
    }
    h1 {
        font-size: 40px;
        color: #90ac14;
        text-decoration: none;
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
        h1 {
            font-size: 2rem;    
        }
    }
      
    @media ${device.laptop} { 
        min-width: 768px;
        h1 {
            font-size: 2.2rem;    
        }
  
    }
      
    @media ${device.desktop} {
        min-width: 1441px;
        h1 {
            font-size: 3rem;    
        }

    }
      
    @media ${device.desktopL} {
        min-width: 2560px;
        h1 {
            font-size: 4rem;    
        }

    }
`;