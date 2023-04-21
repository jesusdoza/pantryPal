import styled from "styled-components";

export const UpdateModalStyles = styled.section`
    border: 2px black solid;
    background-color: white;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        list-style: none;
    }

    & #modal {
        background-color: green;
    }
`;
