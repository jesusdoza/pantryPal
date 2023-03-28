import styled from "styled-components";

export const StyledRecipeSearch = styled.section`
    background-color: white;
    color: #242424;
    height: 100vh;
    ul {
        padding: 0;
    }
    li {
        list-style: none;
    }

    & .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .search {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
    & form input {
        background-color: white;
        color: #242424;
        border-radius: 2em;
        border: 1px solid #242424;
        padding: 1em;
        width: 100%;
        @media (max-width: 768px) {
            width: 50%;
        }
    }
    
    .recipes-display{
        display:grid;
        grid-template-columns: 1fr 7fr;

        .filter-container{
            margin-top:20px;
        }
        .searchResults-container{
            .searchResults {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .searchResults-container ul {
              margin:0;
            }

        }
    }
    
`;
