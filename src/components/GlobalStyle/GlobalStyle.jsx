import { createGlobalStyle } from "styled-components";
import "modern-normalize";
export const GlobalStyle = createGlobalStyle`
body {
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(p) => p.theme.colors.black};
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
}

button {
  cursor: pointer;
}
`;
