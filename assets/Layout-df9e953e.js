import{s as e,j as n,N as x,u as p,r as a,a as g,b as m,O as u}from"./index-b3dd9300.js";const f="/it-portfolio/assets/logo-fd9a7c2d.png",w=e.div`
`,v=e.img`
  width: 120px;
  height: 50px;

  @media screen and (min-width: 1200px) {
    width: 160px;
    height: 70px;
  }
`,j=()=>n.jsx(w,{children:n.jsx(v,{src:f,alt:"logo"})}),b=e.ul`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,k="active",l=e(x)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 28px;
  color: var(--black-color);
  text-decoration: none;
  transition: color 0.5s;

  &.${k} {
    color: var(--active-color);
  }

&:hover {
  color: var(--hover-link-blue);
}


  @media screen and (min-width: 568px) {
    font-size: 18px;
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    font-size: 28px;
  }
`,h=({handleNavlinkClick:t})=>{const r=p(),o=localStorage.getItem("currentPath"),s=o??r.pathname,[,d]=a.useState(s),c=i=>{d(i),localStorage.setItem("currentPath",i)};return a.useEffect(()=>{const i=()=>{c(r.pathname)};return window.addEventListener("popstate",i),()=>{window.removeEventListener("popstate",i)}},[r.pathname]),n.jsx("nav",{children:n.jsxs(b,{children:[n.jsx("li",{children:n.jsx(l,{to:"/",onClick:()=>t&&t("/"),children:"Home"})}),n.jsx("li",{children:n.jsx(l,{to:"/projects",onClick:()=>t&&t("/projects"),children:"Projects"})}),n.jsx("li",{children:n.jsx(l,{to:"/contacts",onClick:()=>t&&t("/contacts"),children:"Contacts"})})]})})},y=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"30",height:"30",fill:"#fff",children:[n.jsx("rect",{y:"11",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"4",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"18",width:"24",height:"2",rx:"1"})]}),L=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Bold",viewBox:"0 0 24 24",width:"30",height:"30",children:n.jsx("path",{d:"M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z"})}),C=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 568px) {
    max-width: 568px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,M=e.div`
  
`,E=e.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin-right: 20px;

  @media screen and (min-width: 568px) {
    display: none;
  }
`,A=e.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #f8f8f8;
  z-index: 1000;
  padding: 20px;
  transition: right 1s ease;

  @media screen and (min-width: 450px) {
    width: 50%;
  }

  @media screen and (min-width: 568px) {
    width: 50%;
    padding: 40px;
  }

  @media screen and (min-width: 767px) {
  }
`,B=e.button`
  display: flex;
  margin-left: auto;
  border: none;
  background-color: inherit;
  padding: 0;

  
`,S=e.div`
margin-top: 40px;
`,O=e.div`
  display: none;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,P=()=>{const t=g(),[r,o]=a.useState(!1),s=()=>{o(!0)},d=()=>{o(!1)},c=i=>{t(i),o(!1)};return n.jsxs(C,{children:[n.jsx(j,{}),n.jsxs(M,{children:[n.jsx(E,{onClick:s,children:n.jsx(y,{})}),r&&n.jsxs(A,{children:[n.jsx(B,{onClick:d,children:n.jsx(L,{})}),n.jsx(S,{children:n.jsx(h,{handleNavlinkClick:c})})]})]}),n.jsx(O,{children:n.jsx(h,{})})]})},z=m`
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
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(167, 33, 33, 1) 50%,
    rgba(0, 0, 0, 1) 89%
  );
  
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
`,I=()=>n.jsxs(n.Fragment,{children:[n.jsx(P,{}),n.jsx(z,{}),n.jsx(a.Suspense,{fallback:null,children:n.jsx(u,{})})]});export{I as default};
