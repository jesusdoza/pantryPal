import styled from 'styled-components';
import { device } from '../mediaQ/device';

// Green
let primary = '#2C4001';
// Light Green
let secondary = '#D6D979';
// Cream
let lightCream = '#F2E7AE';
// Dark Brown
let darkBrown = '#59320F';
// light white
let highlight = '#F2F2F2';

export const Nav = styled.nav`

font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 1.5rem;
display: flex;
justify-content: space-between;
align-items: top;
padding: 0 2em;
background: ${primary};


.nav-item {
  display: none;
}
.bars {
  font-size: 2em;
  z-index: 3;
}
img {
  height: auto;
  width: auto;
}

.logo {

}

a {
  color: ${highlight};
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

.nav-bar{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
}
.main-nav {
}

.mobile-nav-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${primary};
  position: absolute;
  right: 0;
  z-index: 2;
  top: 0;

  &.active {
    max-height: 500px;
  }
}


.mobile-nav {
  color: ${highlight};
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;

}
.mobile-height {
  height: 100%;
}
.nav-width {
  width: 100%;
}

.mobile-nav: hover{
  background: ${highlight};
  color: ${primary};
}
.userIcon {
  color: ${primary};
  font-size: 1em;
  background: white;
  
}

.hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 35px;
  height: 25px;
  cursor: pointer;
  user-select: none;
  z-index: 3;

  .meat {
      border-radius: 2px;
      width: 100%;
      position: absolute;
      height: 3px;
      background: #FFF;
      display: block;
      transition: all .3s cubic-bezier(0.4, 0.0, 0.2, 1);

      &:first-child {
          top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
          top: 50%;
          transform: translateY(-50%);
      }

      &:last-child {
          bottom: 0;
      }
  }
}
.close {
  .meat:first-child,
  .meat:last-child {
      opacity: 0;
  }

  .meat:first-child {
      transform: translateY(20px) scale(0);
  }

  .meat:last-child {
      transform: translateY(-20px) scale(0);
  }

  .meat:nth-child(2) {
      transform: rotate(45deg);
  }

  .meat:nth-child(3) {
      transform: rotate(-45deg);
  }
}

@media ${device.mobileS} { 
  min-width: 200px;
  font-size: .9rem;
  .logo {

  }
}

@media ${device.mobileM} { 
  min-width: 320px;
  font-size: .9rem;
  .logo {

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
  .hamburger{
    display: none;
  }
  .page{
    display: flex;
  }
  .logo {

  }
  .nav-item-container {
    display: flex;
  }
  .nav-item {
    font-size: .8em;
    padding: 0 1em;
  }
  .user-container{
    display: flex;
    justify-content: center;
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