import styled from "styled-components";

export const Card = styled.section`
    margin: 50px;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    text-decoration: none;

    .container {
        background-color: #fff;
        position: relative;
        width: 85%;
        display: flex;
        border-radius: 5px;
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
        img {
            width: 300px;
            height: 300px;
            border-radius: 5px 0 0 5px;
        }
        .try_btn {
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            position: absolute;
            bottom: -20px;
            right: -20px;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            background-color: #cb5b19;
            color: #fff;
            padding: 0.8rem 1.2rem;
            text-transform: uppercase;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
        }
        .save_btn {
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            position: absolute;
            bottom: -20px;
            right: 140px;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            background-color: #bf170e;
            color: #fff;
            padding: 1rem 1.2rem;
            text-transform: uppercase;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
        }
    }

    .delete_btn {
        position: absolute;
        bottom: -20px;
        right: 140px;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        background-color: #880808;
        color: #fff;
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

    .card_body {
        padding: 10px 20px;
        h1 {
            font-size: 2rem;
            color: #252718;
            font-weight: 400;
            margin: 10px;
        }
        p {
            font-size: 1rem;
        }
        .card_footer {
            display: flex;
            padding: 1% 0 2% 0;
            .card_footer_container {
                margin-right: 10px;
            }
            h2 {
                margin-bottom: 2px;
                font-size: 1.4rem;
                font-weight: 400;
                color: #adc48c;
            }
            p {
                color: #72a639;
                font-weight: bold;
                font-size: 1.2rem;
            }
        }
    }
`;
