import styled from "styled-components";

export const Dashboard = styled.section`
    display: grid;
    grid-template-columns: 1fr 8fr;
    width: 100%;
    height: 80vh;

   ul{
    padding:0;
   }
    li {
        list-style: none;
        margin: 0 auto;
    }
    main,section, aside {
        border: green solid 1px;
        text-align: center;
    }

    .diet-container {
        background: #92691d;
    }
    aside{
        
    }
    main {
        background: #e95858;
        border

      
    }
    main section ul {
            background:green;
            display:grid;
            grid-template-columns: 1fr 1fr;

        }
`;
