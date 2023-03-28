import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    //resetting some stuff - targets whole application styles
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        width: 100vw;
    }

`