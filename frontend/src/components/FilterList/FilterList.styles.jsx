import styled from "styled-components";

export const Filter = styled.section`
    display: inline-block;
    background: #8e988d;
    padding: 2%;
    border-radius: 20px;
    box-shadow: 1px 5px 5px black;
    //FILTER SECTION

    & .filter {
        border: 1px solid #242424;
        width: 15%;
        display: inline-block;
    }
    & .filter li {
        margin: 3%;
        width: 100%;
    }

    & .filter ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3px;
    }

    & .btn {
        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #1694b4;
        color: #e7e7e7;
        margin: 2% 0;
        box-shadow: 1px 1px 5px black;
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
        background-color: #1ee47e;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #28bee4;
    }
`;
