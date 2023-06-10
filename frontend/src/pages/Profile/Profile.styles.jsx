import styled from "styled-components";
import { device } from "../../components/mediaQ/device";

//OLD COLORS
// const main_bg = "#8ea93e";
// const button_bg = " #40abc6";
// const avatar_bg = "#ADC48C";
// const avatar_bg = "#ffffff";

const main_bg = "#ffffff";
const app_prefbg = "#40a140";
const button_bg = " #ffea00d0";
const button_bg_hover = " #28bee4";
const avatar_bg = "#ffffff";
const profile_bg = "#25271843";

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

export const Dashboard = styled.section`
    background: ${main_bg};
    display: flex;
    padding: 1rem;
    flex-direction: column;
    width: 100%;

    .hidden {
        scale: 0;
    }
    
    .modal__container {
        width: 100%;
        /* display: flex; */
        justify-content: center;
        position: absolute;
        left: 0;
    }

    picture img {
        background: ${avatar_bg};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${highlight};
        border: 1px solid ${primary};
        border-radius: 5px;
        
        padding: 2rem;
        display: flex;
        flex-direction: column;

    }

    .userIcon {
        color: ${primary};
        font-size: 4em;
        border: 1px solid ${primary};
        border-radius: 50%;
        padding: .5em;
        background: white;
    }

    h3 {
        color: ${primary};
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .btn {

        padding: 1.3rem;
        border-radius: 5px;
        text-align: center;
        background-color: ${primary};
        color: ${highlight};
        text-align: middle;
        vertical-align: center;
        border: 1px solid ${primary};
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${lightCream};
        color: ${primary};
        border: 1px solid ${primary};
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* background: gray; */
        width: 100%;
        padding: 2rem;
        justify-content: middle;
        align-items: center;

        li {
            width: 100%;
            max-width: 400px;
        }
    }

    .profile {
        flex-direction: column;
        width: 100%;
        text-align: center;
        picture {
            width: 100%;
            img {
                width: 100%;
                max-width: 300px;
            }
        }
    }
    .app-pref {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
        justify-content: center;
        li {
            display: flex;
            justify-content: space-around;
            text-align: center;
            width: 30%;
            background: ${secondary};
            border-radius: 5px;
            border: 1px solid ${primary};
            color: ${primary};

            div {
                display: inline-block;
            }
        }
    }

    .app-config {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .controls {
        margin: .5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media ${device.laptop}{
        .profile-page {
            margin: 0 auto;
            min-width: 600px;
           } 
    }
`;
