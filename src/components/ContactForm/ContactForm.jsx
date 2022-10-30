import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { ImPhone, ImUser } from 'react-icons/im';
import {
  FormWrap,
  Form,
  InputWrap,
  Label,
  Input,
  ButtonSubmit,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
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

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(contact);

    reset();
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <Label>Name</Label>
          <ImUser />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </InputWrap>
        <InputWrap>
          <Label>Number</Label>
          <ImPhone />
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </InputWrap>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </FormWrap>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
