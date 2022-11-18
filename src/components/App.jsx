import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box/Box';
import { Title, Subtitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contactsSlice';

export function App() {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const visibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Box p="20px">
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList contacts={visibleContacts()} />
    </Box>
  );
}
