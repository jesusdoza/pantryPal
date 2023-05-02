import styled from "styled-components";

const card_bg = "#08e171dc";

export const SuccessCardStyled = styled.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${card_bg};

    .list_item {
        display: flex;

        justify-content: space-between;
        align-items: center;
        /* border: solid 1px black; */

        img {
            width: 20%;
        }
        p {
            width: 100%;

            /* border: solid 1px black; */
        }
    }
`;
