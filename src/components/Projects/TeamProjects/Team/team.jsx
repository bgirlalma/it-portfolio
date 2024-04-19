import {
  ListContainer,
  TeamList,
  DeveloperName,
  DeveloperLink,
} from './team.styled';
const Team = () => {
  return (
    <ListContainer>
      <TeamList>
        <DeveloperName>Roman Butorin</DeveloperName>
        <DeveloperLink href="https://github.com/777Roma777">
          GitHub
        </DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Anna Zakharchuk</DeveloperName>
        <DeveloperLink href="https://github.com/AnnaHort">GitHub</DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Yuriy Yarish </DeveloperName>
        <DeveloperLink href="https://github.com/Michael-Zhinchyn">
          GitHub
        </DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Vlad Semenets</DeveloperName>
        <DeveloperLink href="https://github.com/VladislavSemenets">
          GitHub
        </DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Maxim Gulai</DeveloperName>
        <DeveloperLink href="https://github.com/MaksimGulay">
          GitHub
        </DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Dexter</DeveloperName>
        <DeveloperLink href="https://github.com/Dexxter300">
          GitHub
        </DeveloperLink>
      </TeamList>
      <TeamList>
        <DeveloperName>Illia Krylov </DeveloperName>
        <DeveloperLink href="https://github.com/Wiltor69">GitHub</DeveloperLink>
      </TeamList>
    </ListContainer>
  );
};

export default Team;
