import { createGlobalStyle } from 'styled-components';
// import MainImage from '../src/components/Image/OIP.jpg'

export const GlobalStyled = createGlobalStyle`
:root{
  --main-font-family: 'Roboto', sans-serif;
  --black-color: #000;
  --white-color: #f8f8f8;
}
body {
  margin: 0;
  font-family: 'Roboto', 'Oxygen', sans-serif;
  box-sizing: border-box;
background-color: var(--black-color);
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


h1, h2, h3, h4, h5, h6{
  padding: 0;
  margin: 0;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

p{
  padding: 0;
  margin: 0;
}
`;
