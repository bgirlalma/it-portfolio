import Contacts from "../../components/Contacts/Contacts";
import styled from "styled-components";


const ContainerPage = styled.div`

  @media screen and (min-width: 420px) {
    padding: 20px;
  }
  @media screen and (min-width: 568px) {
    // max-width: 1440px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactsPage = () => {
  return (
    <ContainerPage>
     <Contacts/>
    </ContainerPage>
  );
};

export default ContactsPage;
