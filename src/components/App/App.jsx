import { useState, useEffect } from 'react';

import { MdOutlineContactPhone } from 'react-icons/md';

import { STORAGE_KEY } from 'constans/localStorageKey';
import { contactsList } from 'constans/contactsList';
import { localStorage } from 'utils/localStorage';
import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import {
  PhonebookWrap,
  ContactWrap,
  Title,
  ContactsTitle,
} from './App.styled.js';

export default function App() {
  const [contacts, setContacts] = useState(
    localStorage.getItem(STORAGE_KEY) ?? contactsList
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, contacts);
  }, [contacts]);

  const addToList = newContact => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }

    setContacts(prevState => [newContact, ...prevState]);
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
