import { useState } from 'react';

import { Form, Label, Span, Button } from './ContactForm.styled';

import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (
      contacts.some(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.some(option => option.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(name, number));
    }
    setName('');
    setNumber('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <Span> Name</Span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <br />
      <Label>
        <Span>Number</Span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
