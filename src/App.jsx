import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { getContacts, addContact as addContactAPI, deleteContact as deleteContactAPI } from './api/contactsAPI';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Завантаження контактів при першому рендері
  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  // Додавання контакту
  const handleAddContact = async (newContact) => {
    const addedContact = await addContactAPI(newContact.name, newContact.number);
    setContacts((prevContacts) => [...prevContacts, addedContact]);
  };

  // Видалення контакту
  const handleDeleteContact = async (contactId) => {
    await deleteContactAPI(contactId);
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Фільтрація контактів
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;