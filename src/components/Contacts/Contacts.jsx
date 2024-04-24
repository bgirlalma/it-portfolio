import ContactsList from "./ContactsList/contactsList";
import {ContactsContainer, ContactsTitle } from "./Contacts.styled";

const Contacts = () => {
    return (
        <ContactsContainer>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactsList/>
        </ContactsContainer>
    )
}

export default Contacts;