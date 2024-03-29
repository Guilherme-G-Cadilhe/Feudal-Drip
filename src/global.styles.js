import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

body {
  margin: 0;
  font-family: "Encode Sans Condensed", sans-serif;
  //font-family: "Encode Sans Condensed", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  //"Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //background: url("https://www.textures.com/system/categories/95266/frontend-large.jpg");
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`

