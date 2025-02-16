import PropTypes from 'prop-types';
import Phone from '../../assets/phone.svg';
import User from '../../assets/user.svg'
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemContainer}>
        <span className={styles.name}><User className={styles.icon}/>{contact.name}</span>
        <span className={styles.number}><Phone className={styles.icon}/>{contact.number}</span>
      </div>
      <button onClick={() => onDeleteContact(contact.id)} className={styles.delete}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

console.log(Phone)

export default Contact;