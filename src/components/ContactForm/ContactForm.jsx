import PropTypes from 'prop-types';
import React from 'react';

import { ImPhone, ImUser } from 'react-icons/im';
import {
  FormWrap,
  Form,
  InputWrap,
  Label,
  Input,
  ButtonSubmit,
} from './ContactForm.styled';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormWrap>
        <Form onSubmit={this.handleSubmit}>
          <InputWrap>
            <Label>Name</Label>
            <ImUser />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
          </InputWrap>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </FormWrap>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
