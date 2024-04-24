import { GithubSvg } from "../Photo/github";
import { LinkedinSvg } from "../Photo/linkedin";
import { MailSvg } from "../Photo/mail";
import { ContactsListContainer, ImageContainer, ContactsItems } from "./contactsList.styled";

const ContactsList = () => {
    return (
      <ContactsListContainer>
        <ContactsItems>
          <ImageContainer>
            <LinkedinSvg />
          </ImageContainer>
          <a href="https://www.linkedin.com/in/alinagennagyivna/">Linkedin</a>
        </ContactsItems>
        <ContactsItems>
          <ImageContainer>
           <MailSvg/>
          </ImageContainer>
          <a href="mailto:almawork@ukr.net">Mail</a>
        </ContactsItems>
        <ContactsItems>
          <ImageContainer>
            <GithubSvg />
          </ImageContainer>
          <a href="https://github.com/bgirlalma?tab=repositories">GitHub</a>
        </ContactsItems>
      </ContactsListContainer>
    );
}

export default ContactsList;