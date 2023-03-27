import styled from 'styled-components';

export const Nav = styled.nav`

font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 2rem;
display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: 6rem;
  width: 100px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

ul {
  display: inline-box;
  width: 60%;
  max-width: 60%;
  list-style-type: none;
}

ul li {
  margin: 0 1rem;
  padding: 10px;
}

a {
  display: flex;
  justify-content: space-around;
  color: #90ac14;
  text-decoration: none;
}

`;

