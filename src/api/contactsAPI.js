const API_URL = 'http://localhost:3001/contacts';

// Отримати всі контакти
const getContacts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Додати новий контакт
const addContact = async (name, number) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
  });
  return response.json();
};

// Видалити контакт за ID
const deleteContact = async (contactId) => {
  await fetch(`${API_URL}/${contactId}`, {
    method: 'DELETE',
  });
  return contactId;
};

export { getContacts, addContact, deleteContact };