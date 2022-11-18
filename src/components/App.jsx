import React from 'react';

import { CssBaseline } from '@mui/material';

import AddContactForm from './AddContactForm/AddContactForm';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

function App() {
  return (
    <>
      <CssBaseline />

      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </Section>
    </>
  );
}

export default App;
