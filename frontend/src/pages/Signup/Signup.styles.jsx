import styled from "styled-components";
import { device } from "../../components/mediaQ/device";

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

    .logo {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
      
    }

    h1 {
        margin: 0;
    }

    h2 {
        color: ${primary};
        margin: 0 auto;
    }

    .title h1{
        font-size: 1.6em;
        color: ${primary};
    }

    form {

    }

    .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 3%;
    }
    
    form input {
        width: 90%;
        text-align: center;
        font-size: 1.5rem;
        border: 1px solid ${primary};
        padding: .5em;
        background: ${highlight};
        border-radius: 5px;
        color: #3c3b3b;
    }

    & form input:focus {
        background-color: ${lightCream};
    }

    .title {
        text-align: center;
        padding: 1em;
    }

    .submit-btn-container {
        width: 85%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
    }
    .signup-btn{
        border: 1px solid ${primary};
        border-radius: 5px;
        padding: .5em;
        background: ${primary};
        color: ${highlight};
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    .signup-btn:hover {
        background: ${secondary};
        color: ${primary};
    }

    .goto-btn {
        padding: .6em;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    .error-desc {
        display: flex;
        justify-content: center;
        width: 50%;
        margin: .5em auto;
        border-radius: 5px;
        padding: 1px;
    }

    .error-marker {
        font-size: 2rem;
        color: red;
    }
    @media ${device.tablet} {
        .logo{
            width: 30%;
        }
        form{
            margin: 0 auto;
            width: 80%;
        }
    }
    @media ${device.laptop} {
        margin-top: 3em;
        .signup-container{
            background: ${highlight};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${primary};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
        .logo{
            width: 50%;
        }
`;
