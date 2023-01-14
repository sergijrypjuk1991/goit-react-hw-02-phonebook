import PropTypes from 'prop-types';
import './ContactItem.css';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className='Contacts'>
      <p className='Contacts__name'>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)} className='Contacts__delete'>
        Delete contact
      </button>
    </div>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;