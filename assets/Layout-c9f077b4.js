import{j as n,N as h,u as p,r as s,a as m,O as g}from"./index-d4b57c27.js";import{s as e,a as u}from"./styled-components.browser.esm-72934d66.js";const f=e.div`
margin-left: 20px;
`,w=e.h1`
color: #fff;
`,j=()=>n.jsx(f,{children:n.jsx(w,{children:"Logo"})}),v=e.ul`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,b="active",l=e(h)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 28px;
  color: var(--black-color);
  text-decoration: none;

  &.${b} {
    color: var(--active-color);
  }

  @media screen and (min-width: 568px) {
    font-size: 18px;
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    font-size: 28px;
  }
`,x=({handleNavlinkClick:t})=>{const a=p(),i=localStorage.getItem("currentPath"),r=i??a.pathname,[,d]=s.useState(r),c=o=>{d(o),localStorage.setItem("currentPath",o)};return s.useEffect(()=>{const o=()=>{c(a.pathname)};return window.addEventListener("popstate",o),()=>{window.removeEventListener("popstate",o)}},[a.pathname]),n.jsx("nav",{children:n.jsxs(v,{children:[n.jsx("li",{children:n.jsx(l,{to:"/",onClick:()=>t&&t("/"),children:"Home"})}),n.jsx("li",{children:n.jsx(l,{to:"/projects",onClick:()=>t&&t("/projects"),children:"Projects"})}),n.jsx("li",{children:n.jsx(l,{to:"/contacts",onClick:()=>t&&t("/contacts"),children:"Contacts"})})]})})},y=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"30",height:"30",fill:"#fff",children:[n.jsx("rect",{y:"11",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"4",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"18",width:"24",height:"2",rx:"1"})]}),L=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Bold",viewBox:"0 0 24 24",width:"30",height:"30",children:n.jsx("path",{d:"M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z"})}),C=e.div`
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
  
`,k=e.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin-right: 20px;

  @media screen and (min-width: 568px) {
    display: none;
  }
`,S=e.div`
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
`,O=e.div`
margin-top: 40px;
`,P=e.div`
  display: none;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`,z=()=>{const t=m(),[a,i]=s.useState(!1),r=()=>{i(!0)},d=()=>{i(!1)},c=o=>{console.log("Navigating to:",o),t(o),i(!1)};return n.jsxs(C,{children:[n.jsx(j,{}),n.jsxs(M,{children:[n.jsx(k,{onClick:r,children:n.jsx(y,{})}),a&&n.jsxs(S,{children:[n.jsx(E,{onClick:d,children:n.jsx(L,{})}),n.jsx(O,{children:n.jsx(x,{handleNavlinkClick:c})})]})]}),n.jsx(P,{children:n.jsx(x,{})})]})},A=u`
:root{
  --main-font-family: 'Roboto', sans-serif;
  --black-color: #000;
  --white-color: #f8f8f8;
  --active-color: #E4080A;
  --link-color: #060270;
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
`,N=()=>n.jsxs(n.Fragment,{children:[n.jsx(z,{}),n.jsx(A,{}),n.jsx(s.Suspense,{fallback:null,children:n.jsx(g,{})})]});export{N as default};
