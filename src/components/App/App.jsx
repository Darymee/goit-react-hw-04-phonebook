import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { MdOutlineContactPhone } from 'react-icons/md';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import {
  PhonebookWrap,
  ContactWrap,
  Title,
  ContactsTitle,
} from './App.styled.js';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const STORAGE_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? contactsList
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addToList = (name, number) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteFromList = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    const { value } = event.target;

    setFilter(value);
  };

  const getFilteredContact = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  const filteredContacts = getFilteredContact();

  return (
    <PhonebookWrap>
      <Title>
        Phonebook <MdOutlineContactPhone />
      </Title>
      <ContactForm onSubmit={addToList} />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactWrap>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={filteredContacts} onDelete={deleteFromList} />
      </ContactWrap>
    </PhonebookWrap>
  );
}
