import styled from "styled-components";
import { device } from "../../components/mediaQ/device.jsx";

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

export const StyledSignup = styled.section`
    height: 100%;

    & .login-container {
        position: relative;
    }
    & .loading {
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #1e3d21ed;
        section {
            h2 {
                color: white;
                text-align: center;
            }
        }
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: ${primary};
        width: 90%;
        margin: 0 auto;
    }
    & .logo {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        margin: 0 auto;
    }
    & .about {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${highlight};
        background: ${primary};
        border-radius: 0 0 20px 20px;
    }
    & .about li {
        list-style: none;
    }

    & .about ul {
        padding: 0;
    }
    & .about p {
        padding: 1.5em;
    }
    & .form-sect {
    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1em;
    }

    & form div {
        width: 90%;
        margin: 0 auto;
    }

    & .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3%;
        border: 1px solid ${primary};
        border-radius: 5px;
    }
    & form input {
        text-align: center;
        font-size: 1.5rem;
        border: none;
        width: 100%;
        padding: 0.5em;
        background-color: ${highlight};
        border-radius: 5px;
        color: #3c3b3b;
    }
    & form input:focus {
        background-color: ${lightCream};
        border: none;
    }
    & .input-tag {
        color: ${highlight};
    }

    & form div.title {
        text-align: center;

        padding: 1%;
    }

    & .btn {
        color: #000000;
        width: 100%;
        border-radius: 5px;
        padding: 0.5em;
        background: ${secondary};
        color: #000000;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${secondary};
        color: ${primary};
        border: 1px solid ${primary};
    }

    & .submit-btn button {
        margin: 0.4em 0;
        display: flex;
        justify-content: center;
        background: ${primary};
        color: ${highlight};
        border: 1px solid ${highlight};
    }

    & .input-container {
        position: relative;
    }

    & .goto-btn {
        padding: 1%;
        width: 40%;
        margin-top: 5%;
        font-size: 1rem;
        text-align: center;
    }

    & .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    & .error-desc {
        border-radius: 10px;
        padding: 10px;
    }

    & .error-marker {
        font-size: 2rem;
        color: black;
    }

    @media ${device.tablet} {
        .logo {
            width: 50%;
        }
        form {
            margin: 0 auto;
            width: 60%;
        }
    }
    @media ${device.laptop} {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
        .login-container {
            background: ${highlight};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${primary};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

        .logo {
            width: 60%;
        }
        form {
            width: 100%;
        }
        & form input {
            background: white;
        }
    }

    @media ${device.laptopL} {
        .logo {
        }
        form {
        }
    }
    @media ${device.desktop} {
    }
`;
