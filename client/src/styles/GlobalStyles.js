import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif; 
}

html, body {
    position: relative;
    min-height: 100vh;
}

body {
    background-color: ${({ theme }) => theme.colors.body};
    padding-bottom: 45px;
}
h1 {
   font-size: 3em;
}

h2 {
    font-size: 2.5em;
}

h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.headings}
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: 0.2s ease color;
}

a:hover {
    color: ${({ theme }) => theme.colors.hover};
}

p {
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.text}
}

button {
    background: none;
    padding: 0.5em;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.headings};
    color: ${({ theme }) => theme.colors.headings};
    cursor: pointer;
    transition: 0.2s ease all;
}

button:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text}
}
`;

export default GlobalStyles;
