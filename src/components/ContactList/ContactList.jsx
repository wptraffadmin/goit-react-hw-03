import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
      </ul>
    </div>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;