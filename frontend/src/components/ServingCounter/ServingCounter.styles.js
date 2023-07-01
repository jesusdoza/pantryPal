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

export const StyledServingCounter = styled.section`
width: 100%;


.counterSection {
    display: flex;
    align-items: center;
    justify-content: center;
}
.counterSection h2{
    margin-right: .5em;
}
input {
    height: 1em;
    width: 2em;
    border-radius: 5px;
    border: 1px solid ${primary};
    color: ${primary};
    font-size: 2em;
}

.ingredientSection {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.ingredientSection li{
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em;
}
.ingredientSection span{
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1em;
}

.ingredientSection span img {
    width:70px;
    height:70px;
}
`