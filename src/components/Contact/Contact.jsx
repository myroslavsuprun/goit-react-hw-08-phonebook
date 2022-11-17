import { useDeleteContactMutation } from 'redux/contactsSlice';

import { ContactsItem, ContactsButton } from './Contact.styled';

const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactsItem>
      {name}
      <br />
      {phone}
      <ContactsButton disabled={isLoading} onClick={() => deleteContact(id)}>
        {isLoading ? 'Deleting' : 'Delete'}
      </ContactsButton>
    </ContactsItem>
  );
};
// File -> Preferences -> Setting -> Features -> Terminal -> Inherit Env
export default Contact;
