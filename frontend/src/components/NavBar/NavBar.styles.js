import styled from 'styled-components';
import { device } from '../mediaQ/device';

export const Nav = styled.nav`

font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 1.5rem;
display: flex;
justify-content: space-around;
align-items: top;
margin-top: 10px;

img {
  height: auto;
  width: auto;
}

.logo {
  padding: .3em
  height: 80px;
  width: 80px;
}

a {
  color: #90ac14;
  text-decoration: none;
  display: flex;
  align-items: center;
}

ul {
  display: inline-box;
  list-style-type: none;
  
}

.userIcon {
  font-size: 1.5em;
  border: 2px solid #90ac14;
  padding: .5em;
  border-radius: 50%;
}

@media ${device.mobileS} { 
  min-width: 200px;
  font-size: .9rem;
  .logo {
    height: 50px;
    width: 54px;
  }
}

@media ${device.mobileM} { 
  min-width: 320px;
  font-size: .9rem;
  .logo {
    height: 50px;
    width: 54px;
  }
}

@media ${device.mobileL} { 
  min-width: 375px;
  font-size: 1rem;
  .logo {
    height: 50px;
    width: 100px;
  }
}

@media ${device.tablet} { 
  min-width: 425px;
  
}

@media ${device.laptop} { 
  min-width: 768px;
  font-size: 1.8rem;
  .logo {
    height: 100px;
    width: 150px;
  }
}

@media ${device.desktop} {
  min-width: 1441px;
  font-size: 3rem;
  .logo {
    height: 140px;
    width: 160px;
  }
}

@media ${device.desktopL} {
  min-width: 2560px;
  font-size: 4rem;
  .logo {
    height: 280px;
    width: 400px;
  }
}

`;