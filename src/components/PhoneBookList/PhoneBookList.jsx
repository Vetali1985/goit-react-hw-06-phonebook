import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ListItem, List, Button, Contact } from './PhoneBookList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const onDelete = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
