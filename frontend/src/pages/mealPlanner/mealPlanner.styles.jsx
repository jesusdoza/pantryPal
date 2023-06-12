// styles.js
import styled from 'styled-components';
import { device } from '../../components/mediaQ/device';

// Green
let primary = "#2C4001";
// Light Green
let secondary = "#dae082";
// Cream
let lightCream = "#F2E7AE";
// Dark Brown
let darkBrown = "#59320F";
// light white
let highlight = "#F2F2F2";

export const StyledMealPlanner = styled.section`
  background: ${highlight};
  padding: 1em;
  border-radius: 5px;
  margin: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${primary};
  border: 1px solid ${primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {

    color: ${primary};
  }
  & h2 {
    color: black;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .instructionContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .instructionContainer h1 {
    font-size: 2em;
    text-align: center;
  }

  form label{
    color: ${primary};
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
    width: 100%;
  }

  & form input {
    text-align: center;
    margin: 0.5% auto;
    font-size: 1rem;
    border-radius: 5px;
    width: 80%;
    padding: 0.5%;
  }

  & form select {
    text-align: center;
    margin: 0.5% auto;
    font-size: 1rem;
    border-radius: 5px;
    width: 80%;
    padding: 0.5%;
  }

  & form button {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${primary};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${lightCream};
    margin: .5em;
  }

  & form button:hover {
    background: ${lightCream};
    color: ${primary};
    border: 1px solid ${primary};
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  & th,
  & td {
    border: 1px solid #ccc;
    padding: 0.5% 1%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }

  & th {
    background-color: #f2f2f2;
  }

  & tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media ${device.laptop}{
    margin: 2em auto;
    width: 100%;
    max-width: 900px;

  }
`;
