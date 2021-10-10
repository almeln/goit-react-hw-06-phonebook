import { v4 as uuidv4 } from 'uuid';

import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './contacts-types';

export const addContact = data => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = value => ({
  type: FILTER,
  payload: value,
});

// export { addContact, deleteContact, changeFilter };
