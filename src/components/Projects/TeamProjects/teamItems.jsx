import { HealthyHubSvg } from '../Photo/HealthyHub';
import tasty from '../Photo/TASTY-TREATS.png';
import SimpleChocolate from '../Photo/chocolate-dek-2x.jpg'

import {
  ListContainer,
  CardProjectOne,
  SimpleChocolateImageContainer,
  SimpleChocolateImage,
  LinkCodeCardOne,
  LinkWebsiteCardOne,
  CardProjectTwo,
  ImageContainer,
  Image,
  LinkCodeCardTwo,
  LinkWebsiteCardTwo,
  CardProjectThree,
  SvgContainer,
  LinkContainer,
  LinkCode,
  LinkWebsite,
  CardDesc,
} from './teamItems.styled';

const ProjectItems = () => {
  return (
    <ListContainer>
      <CardProjectOne>
        <div>
          <SimpleChocolateImageContainer>
            <SimpleChocolateImage
              src={SimpleChocolate}
              alt="Simple Chocolate"
              width="250"
              height="150"
            />
          </SimpleChocolateImageContainer>

          <LinkContainer>
            
              <LinkCodeCardOne href="https://github.com/777Roma777/team-project" target="_blank" rel="noopener noreferrer">Code</LinkCodeCardOne>
            
              <LinkWebsiteCardOne href="https://777roma777.github.io/team-project/" target="_blank" rel="noopener noreferrer">Website</LinkWebsiteCardOne>
            
          </LinkContainer>
        </div>

        <CardDesc>
          Simple Chocolate - Website invitation to a master class on cooking
          various types of chocolate. You can also order various chocolates
          straight to your home. Simple Chocolate also provides recipes for
          preparing various chocolates, offering you the opportunity to cook
          your own chocolate creations.
          <br />
          In this project, i served as a developer. I developed the Hero
          Section.
        </CardDesc>
      </CardProjectOne>

      <CardProjectTwo>
        <CardDesc>
          TastyTreats - website for a master class on cooking various dishes.
          You can also Customize Your Meal with Ingredient Options and
          Step-by-Step Video Guides.
          <br />
          In this project, i served as a developer. I developed the search
          section and dish cards.
        </CardDesc>

        <div>
          <ImageContainer>
            <Image src={tasty} alt="tasty treats" width="250" height="150" />
          </ImageContainer>

          <LinkContainer>
            
              <LinkCodeCardTwo href="https://github.com/Michael-Zhinchyn/TASTY-TREATS" target="_blank" rel="noopener noreferrer">
                Code
              </LinkCodeCardTwo>
            
              <LinkWebsiteCardTwo href="https://michael-zhinchyn.github.io/TASTY-TREATS/index.html" target="_blank" rel="noopener noreferrer">
                Website
              </LinkWebsiteCardTwo>
            
          </LinkContainer>
        </div>
      </CardProjectTwo>

      <CardProjectThree>
        <div>
          <SvgContainer>
            <HealthyHubSvg />
          </SvgContainer>

          <LinkContainer>
 
              <LinkCode href="https://github.com/AnnaHort/HealthyHub" target="_blank" rel="noopener noreferrer">Code</LinkCode>

              <LinkWebsite href="https://annahort.github.io/HealthyHub/" target="_blank" rel="noopener noreferrer">
                Website
              </LinkWebsite>
 
          </LinkContainer>
        </div>

        <CardDesc>
          HealthyHub is an application that helps you track changes in your
          weight. It also assists in monitoring the number of calories you
          consume and the amount of water you drink. You can also add your own
          dishes and create a list of favorite. During registration, you input
          all necessary data for the correct calculation of daily calorie
          intake. <br />
          In this project, i served as a scrum master and developer. I developed
          the Welcome page, Body Parameters Page, Recommended Food, and
          Graphicals.
        </CardDesc>
      </CardProjectThree>
    </ListContainer>
  );
};

export default ProjectItems;
