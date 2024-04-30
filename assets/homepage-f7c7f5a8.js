import{N as e,r as t,_ as a,j as i}from"./index-f8748ef7.js";import{s as n}from"./styled-components.browser.esm-33429efd.js";const d="/it-portfolio/assets/my-photo-9259dff4.jpg",o="/it-portfolio/assets/backdrop-87af262a.jpg",p=n.div`
  width: 100%;
  height: 400px;
  background-image: url(${o});
  background-size: cover;

  @media screen and (min-width: 568px) {
    background-image: url(${d});
    width: 570px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
  }

  @media screen and (min-width: 600px) {
    width: 600px;
    height: 300px;
  }

  @media screen and (min-width: 700px) {
    width: 690px;
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 400px;
  }

  @media screen and (min-width: 1000px) {
    width: 960px;
    height: 500px;
  }

  @media screen and (min-width: 1200px) {
    width: 1160px;
    height: 600px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    max-width: unset;
    width: 100%;
    height: 700px;
    margin-left: unset;
    margin-right: unset;
  }
`,r=n.div`
  @media screen and (min-width: 1200px) {
    padding-top: 150px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%)
  }
`,x=n.h1`
  display: flex;
  justify-content: center;
  padding: 80px 40px 0 40px;

  font-family: var(--main-font-family);
  font-weight: 600;
  font-size: 28px;
  color: var(--white-color);

  @media screen and (min-width: 568px) {
    display: flex;
    justify-content: unset;
    padding: 40px 0 0 40px;
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: unset;
    max-width: 380px;
    padding: 100px 0 0 100px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 650px;
    font-size: 38px;
    justify-content: inherit;
    padding: 100px 0 0 80px;
    @media screen and (min-width: 1200px) {
      padding-top: 0;
    }
  }
`,s=n.p`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--white-color);
  margin: 40px 0 0 0;
  padding: 0 40px 20px 40px;

  @media screen and (min-width: 470px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 568px) {
    max-width: 380px;
    margin: 20px 0 0 0;
    padding: 0 0 20px 40px;
    margin-left: unset;
    margin-right: unset;
  }

  @media screen and (min-width: 768px) {
    display: inline-block;
    justify-content: unset;
    max-width: 500px;
    padding: 0;
    padding-left: 100px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 700px;
    font-size: 30px;
    padding-left: 80px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 770px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 940px;
   
  }
`,m=n(e)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--link-color);
  background-color: var(--white-color);
  padding: 2px;
  margin-left: 5px;
  border-radius: 10px 5px 10px 5px;
  transition: background-color 0.3s;

  &:hover {
    color: var(--active-color);
    background-color: var(--hover-link-blue);
  }
`,h=t.lazy(()=>a(()=>import("./stack-2a49b134.js"),["assets/stack-2a49b134.js","assets/index-f8748ef7.js","assets/index-a6b3472e.css","assets/styled-components.browser.esm-33429efd.js"])),c=()=>i.jsxs(i.Fragment,{children:[i.jsx(p,{children:i.jsxs(r,{children:[i.jsx(x,{children:"Fullstack developer"}),i.jsxs(s,{children:["Hi! I`m Alina Akulina, i`m involved in the developmant of websites and applications. I have 1.6 years of practical experience. I have experience working in a team and independently. Check out my",i.jsx(m,{to:"/projects",children:"Projects"})]})]})}),i.jsx("div",{children:i.jsx(h,{})})]}),l=n.div`
  @media screen and (min-width: 568px) {
    max-width: 1440px;
    padding: 20px 20px;
    margin-left: auto;
    margin-right: auto;
  }
`,w=()=>i.jsx(l,{children:i.jsx(c,{})});export{w as default};
