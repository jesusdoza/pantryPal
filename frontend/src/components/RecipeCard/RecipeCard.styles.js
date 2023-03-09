import styled from 'styled-components';

export const Card = styled.section`



margin: 20px;
padding: 0;
box-sizing: border-box;


body {
 background-color: #c2a3d1;
 font-family: Arial, Helvetica, sans-serif;
 display: grid;
 place-items: center;
 min-height: 100vh;
}

.container {
 background-color: #fff;
 position: relative;
 width: 50%;
 display: grid;
 grid-template-columns: 300px 600px;
 border-radius: 5px;
 box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
 img {
  width: 300px;
  height: 300px;
  border-radius: 5px 0 0 5px;
 }
 .btn {
  position: absolute;
  bottom: -20px;
  right: -20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #fc9400;
  color: #fff;;
  padding: 22px 45px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  i {
   margin-left: 20px;
   font-size: 1.5rem;
  }
 }
}
.card_body {
 padding: 40px 40px 0;
 h1 {
  color: #351897;
  font-weight: 400;
 }
 .card_star span {
  font-size: 0.8rem;
  color: #ffa800;
  margin: -5px 0 20px;
 }
 p {
  font-size: 0.9rem;
 }
 .card_footer {
  display: flex;
  margin: 20px 0 10px;
  .card_footer_container {
   margin-right: 40px;
  }
  h2 {
   margin-bottom: 5px;
   font-size: 1rem;
   font-weight: 400;
   color: #818189;
  }
  p {
   color: #351897;
   font-weight: bold;
   font-size: 1.2rem;
  }
 }
}

`;
