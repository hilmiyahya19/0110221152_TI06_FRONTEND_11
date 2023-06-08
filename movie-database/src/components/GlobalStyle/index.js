// import createGlobalStyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //CSS RESET, FONT
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  a {
    text-decoration: none;
    color: white;
}
`;

export default GlobalStyle;