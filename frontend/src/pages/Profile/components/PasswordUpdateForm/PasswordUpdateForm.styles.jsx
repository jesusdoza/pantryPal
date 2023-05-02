import styled from "styled-components";

const main_bg = "#e9d2d2";
const error_bg = "#e46666";

export const StyledPasswordForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & form {
        background-color: ${main_bg};
        width: 400px;
        max-width: 400px;
    }

    & .error__container {
        width: 100%;

        border-radius: 40px;
        overflow: hidden;

        /* border: solid black 3px; */
        font-size: 0.8rem;
    }

    & .error input {
        background-color: ${error_bg};
    }

    & .error label::after {
        content: "*";
    }
`;
