import {
  AddContactForm,
  Section,
  ContactsList,
  ContactsFilter,
} from 'components';

const Home = () => {
  return (
    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </Section>
    </>
  );
};

export default Home;
