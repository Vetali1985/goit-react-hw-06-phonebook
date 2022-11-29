import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './PhoneBookList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Container } from './UI/Container/Container.styled';

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
