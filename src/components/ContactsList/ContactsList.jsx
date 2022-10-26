import PropTypes from 'prop-types';

import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

import { ContactsUl } from './ContactsList.styled.js';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ContactsUl>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </ContactsUl>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
