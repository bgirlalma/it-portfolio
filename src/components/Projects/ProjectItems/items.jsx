import { HealthyHubSvg } from '../Photo/HealthyHub';
import tasty from '../Photo/TASTY-TREATS.png'

import {
  CardProject,
  ImageContainer, Image,
  LinkCodeCardOne,
  LinkWebsiteCardOne,
  SvgContainer,
  LinkContainer,
  LinkCode,
  LinkWebsite,
  CardDesc,
} from './items.styled';

const ProjectItems = () => {
  return (
    <ul>
      <CardProject>
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
            <LinkCodeCardOne href="https://github.com/Michael-Zhinchyn/TASTY-TREATS">
              Code
            </LinkCodeCardOne>

            <LinkWebsiteCardOne href="https://michael-zhinchyn.github.io/TASTY-TREATS/index.html">
              Website
            </LinkWebsiteCardOne>
          </LinkContainer>
        </div>
      </CardProject>

      <CardProject>
        <div>
          <SvgContainer>
            <HealthyHubSvg />
          </SvgContainer>

          <LinkContainer>
            <LinkCode href="https://github.com/AnnaHort/HealthyHub">
              Code
            </LinkCode>

            <LinkWebsite href="https://annahort.github.io/HealthyHub/">
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
      </CardProject>
    </ul>
  );
};

export default ProjectItems;
