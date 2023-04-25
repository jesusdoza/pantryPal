import styled from "styled-components";

const error_bg = "#f4888a";

export const ErrorCardStyled = styled.div`
    z-index: 3;
    border: solid 1px black;
    background-color: ${error_bg};

    .error_item {
        display: flex;

        justify-content: space-between;
        align-items: center;
        border: solid 1px black;

        img {
            width: 20%;
        }
        p {
            width: 100%;

            border: solid 1px black;
        }
    }
`;
