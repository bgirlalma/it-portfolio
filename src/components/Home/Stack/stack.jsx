import { CSSsvg } from './Icons/css';
import { FirebaseSvg } from './Icons/firebase';
import { GitSvg } from './Icons/git';
import { HTMLsvg } from './Icons/html';
import { JSsvg } from './Icons/js';
import { MongoDBsvg } from './Icons/mongodb';
import { NodeSvg } from './Icons/node';
import { PHPsvg } from './Icons/php';
import { ReactSvg } from './Icons/react';
import { SassSvg } from './Icons/sass';
import { CardContainer, Card, CardTitle } from './stack.styled';
const Stack = () => {
    return (
      <>
        <CardContainer>
          <Card>
            <HTMLsvg />
            <CardTitle>
              <a href="https://www.w3schools.com/html/">HTML</a>
            </CardTitle>
          </Card>
          <Card>
            <CSSsvg />
            <CardTitle>
              <a href="https://www.w3schools.com/Css/">CSS</a>
            </CardTitle>
          </Card>
          <Card>
            <SassSvg />
            <CardTitle>
              <a href="https://sass-lang.com/">SASS</a>
            </CardTitle>
          </Card>
          <Card>
            <JSsvg />
            <CardTitle>
              <a href="https://www.w3schools.com/js/DEFAULT.asp">JavaScript</a>
            </CardTitle>
          </Card>
          <Card>
            <ReactSvg />
            <CardTitle>
              <a href="https://react.dev/">React</a>
            </CardTitle>
          </Card>
          <Card>
            <NodeSvg />
            <CardTitle>
              <a href="https://nodejs.org/en">Node</a>
            </CardTitle>
          </Card>
          <Card>
            <PHPsvg />
            <CardTitle>
              <a href="https://www.php.net/">PHP</a>
            </CardTitle>
          </Card>
          <Card>
            <MongoDBsvg />
            <CardTitle>
              <a href="https://www.mongodb.com/">MongoDB</a>
            </CardTitle>
          </Card>
          <Card>
            <FirebaseSvg />
            <CardTitle>
              <a href="https://firebase.google.com/">Firebase</a>
            </CardTitle>
          </Card>
          <Card>
            <GitSvg />
            <CardTitle>
              <a href="https://git-scm.com/">Git</a>
            </CardTitle>
          </Card>
        </CardContainer>
      </>
    );
}

export default Stack;