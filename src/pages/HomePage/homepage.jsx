


import styled from "styled-components";
import Home from "../../components/Home/Home";


const HomePageContainer = styled.div`
  @media screen and (min-width: 568px) {
    max-width: 1440px;
    padding: 20px 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const HomePage = () => {
    return (
        <HomePageContainer>
            <Home/>
        </HomePageContainer>
    )
}

export default HomePage;