import { nanoid } from 'nanoid';
import React from 'react';

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

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToList = contacts => {
    const { name, number } = contacts;

    for (const contact of this.state.contacts) {
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

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteFromList = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.getFilteredContact();
    const { filter } = this.state;
    return (
      <PhonebookWrap>
        <Title>
          Phonebook <MdOutlineContactPhone />
        </Title>
        <ContactForm onSubmit={this.addToList} />
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactWrap>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteFromList}
          />
        </ContactWrap>
      </PhonebookWrap>
    );
  }
}
