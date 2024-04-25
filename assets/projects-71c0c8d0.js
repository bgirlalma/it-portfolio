import{s as e,N as c,j as o,a as d,r as i,c as p,P as m}from"./index-b3dd9300.js";const h=e.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`,s="active",x=e(c)`
  position: relative;
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px 0 0 10px;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);
  background-color: var(--white-color);

  transition:
    background-color 0.5s,
    color 0.3s;

  &.${s} {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #333;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    height: 50px;
  }
`,u=e(c)`
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);
  background-color: var(--white-color);

  transition:
    background-color 0.5s,
    color 0.3s;

  &.${s} {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  &:hover {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    height: 50px;
  }
`,v=({activeTab:n,handleButtonClick:t})=>o.jsxs(h,{children:[o.jsx(x,{to:"/projects/team",onClick:()=>t("team"),className:n==="team"?"active":"",children:"Team"}),o.jsx(u,{to:"/projects/own",onClick:()=>t("own"),className:n==="own"?"active":"",children:"Own"})]}),g=e.h1`
display: none;
`,f=()=>{const n=d(),[t,r]=i.useState(location.pathname.includes("own")?"own":"team"),l=a=>{r(a),n(`/projects/${a}`)};return i.useEffect(()=>{location.pathname.includes("projects")||r("team")},[location.pathname]),o.jsxs("div",{children:[o.jsx(g,{children:"Team Projects"}),o.jsx(v,{activeTab:t,handleButtonClick:l}),t==="own"?o.jsx(p,{}):o.jsx(m,{})]})},w=e.div`

  @media screen and (min-width: 420px) {
    padding: 20px;
  }
  @media screen and (min-width: 568px) {
    // max-width: 1440px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`,b=()=>o.jsx(w,{children:o.jsx(f,{})});export{b as default};
