import { createGlobalStyle } from 'styled-components';
// import MainImage from '../src/components/Image/OIP.jpg'

export const GlobalStyled = createGlobalStyle`
:root{
  --main-font-family: 'Roboto', sans-serif;
  --black-color: #000;
  --white-color: #f8f8f8;
  --active-color: #E4080A;
  
  --link-color: #060270;
  --link-green-color: #9bb537;
  --link-lite-green-color: #45ffbc;
  --link-pink-color: #ffc4f7;
  --link-black-color: #050505;
  --link-orange: #fd9222;
  --link-dark: #1e1823;
  --link-turquoise-color: #40e0d0;
  --link-grey-color: #9fbaae;

  --hover-link-white: #FABBBB;
  --hover-link-dark: #6B28A2;
  --hover-link-orange: #764510;
  --hover-link-green: #18A673;
  --hover-link-pink: #E618CA;
  --hover-link-blue: #3A32F9;
  --hover-link-turqoise: #5A948E;
  --hover-grey-color: #45E59E;

  --backgroung-cards-color: #413E3E;
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
