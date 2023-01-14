import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './ContactForm.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  formChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    event.currentTarget.reset();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.formSubmit} className="Contact-form">
        <label htmlFor={this.nameInputId} className="Contact-form__label-name">
          <p className="Contact-form__name">Name</p>
          <input
            placeholder="Sergij Rypjuk"
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.formChange}
            className="Contact-form__input-name"
          />
        </label>
        <label htmlFor={this.numberInputId}className="Contact-form__label-number">
          <p className="Contact-form__number">Number</p>
          <input
            placeholder="377-44-26"
            type="tel"
            name="number"
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.formChange}
            className="Contact-form__input-number"
          />
          
        </label>
        <button type="submit" className="Contact-form__button">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;