import{j as n,N as x,u as p,r as a,a as g,O as m}from"./index-f8748ef7.js";import{s as e,a as u}from"./styled-components.browser.esm-33429efd.js";const f=e.div`
`,v=e.h1`
  a {
    font-family: var(--logo-font-family);
    font-weight: 500;
    font-size: 48px;
    color: var(--active-color);
    transition: color 0.5s;
  }

  a:hover {
    color: var(--hover-link-blue);
  }
`,w=()=>n.jsx(f,{children:n.jsx("div",{children:n.jsx(v,{children:n.jsx("a",{href:"/",children:"AG"})})})}),j=e.ul`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,b="active",d=e(x)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 28px;
  color: var(--black-color);
  text-decoration: none;
  transition: color 0.5s;

  &.${b} {
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
`,h=({handleNavlinkClick:o})=>{const r=p(),i=localStorage.getItem("currentPath"),s=i??r.pathname,[,c]=a.useState(s),l=t=>{c(t),localStorage.setItem("currentPath",t)};return a.useEffect(()=>{const t=()=>{l(r.pathname)};return window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}},[r.pathname]),n.jsx("nav",{children:n.jsxs(j,{children:[n.jsx("li",{children:n.jsx(d,{to:"/",onClick:()=>o&&o("/"),children:"Home"})}),n.jsx("li",{children:n.jsx(d,{to:"/projects",onClick:()=>o&&o("/projects"),children:"Projects"})}),n.jsx("li",{children:n.jsx(d,{to:"/contacts",onClick:()=>o&&o("/contacts"),children:"Contacts"})})]})})},k=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"30",height:"30",fill:"#fff",children:[n.jsx("rect",{y:"11",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"4",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"18",width:"24",height:"2",rx:"1"})]}),y=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Bold",viewBox:"0 0 24 24",width:"30",height:"30",children:n.jsx("path",{d:"M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z"})}),L=e.div`
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
`,C=e.div`
  
`,M=e.button`
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
`,E=e.button`
  display: flex;
  margin-left: auto;
  border: none;
  background-color: inherit;
  padding: 0;

  
`,B=e.div`
margin-top: 40px;
`,S=e.div`
  display: none;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,z=()=>{const o=g(),[r,i]=a.useState(!1),s=()=>{i(!0)},c=()=>{i(!1)},l=t=>{o(t),i(!1)};return n.jsxs(L,{children:[n.jsx(w,{}),n.jsxs(C,{children:[n.jsx(M,{onClick:s,children:n.jsx(k,{})}),r&&n.jsxs(A,{children:[n.jsx(E,{onClick:c,children:n.jsx(y,{})}),n.jsx(B,{children:n.jsx(h,{handleNavlinkClick:l})})]})]}),n.jsx(S,{children:n.jsx(h,{})})]})},O=u`
:root{
  --main-font-family: 'Roboto', sans-serif;
  --logo-font-family: "Sevillana", cursive;
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
  font-family: 'Roboto', 'Oxygen', sans-serif, 'Jacquard 24', system-ui, "Sevillana", cursive;
  box-sizing: border-box;
background-color: #080606;
  
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
`,q=()=>n.jsxs(n.Fragment,{children:[n.jsx(z,{}),n.jsx(O,{}),n.jsx(a.Suspense,{fallback:null,children:n.jsx(m,{})})]});export{q as default};
