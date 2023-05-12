import styled from "styled-components";

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

export const Filter = styled.section`
   
    color: ${primary};


    width: 100%;

    //FILTER SECTION

    li {
       
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    & .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: .2em .4em;
        border-radius: .5em;
        text-align: center;
        background-color: ${primary};
        color: ${highlight};
        border: 1px solid ${primary};
    }
    & .btn-filter {

        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #16b462;
        color: #e7e7e7;
        box-shadow: 3px 1px 5px black;
    }
    & .btn-filter:hover {
        cursor: pointer;
   
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${lightCream};
        color: ${primary};
        border: 1px solid ${primary};
    }
    .filter-container {
        padding: 0;
    }
    .filter-row h2 {
        margin: .3em;
        
    }
    .filter-row {
        display: flex;
        align-items: center;
        border-top: 1px solid black;
    }
    .filter-options {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .filter-options li {
        margin: .3em;
    }

    @media (min-width: 768px) {

    }
    @media (min-width: 900px) {

    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 1600px) {

    }
`;
