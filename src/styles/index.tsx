import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root{
   --background: #ffffff;
   --white: #fff;
   --dark: black;
   --cart: #e4deee;
   --green:#38b380;
   --title: #6e61b9;
   --text: #8c8c8c;
   --spirit: rgba(0,0,0,0.04);
   --border: 1px solid rgba(0, 0, 0, 0.136);
   --shadow: 0px 1px 7px rgba(0, 0, 0, 0.05);
   --shadow-box: 0px 1px 7px rgba(0, 0, 0, 0.2);
   --opacity: 0.7;
}

*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
   
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--background);
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    max-width: 100vw !important;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #6820744b;
        border-radius: 0.5rem;
    }
}

`;

export const Wrapper = styled.div`
  margin: 0 10%;
`;
