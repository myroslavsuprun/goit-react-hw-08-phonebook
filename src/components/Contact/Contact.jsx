import { useDeleteContactMutation } from 'redux/contactsSlice';

import { ContactsItem } from './Contact.styled';
import { Button } from '@mui/material';

const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactsItem>
      {name}
      <br />
      {phone}
      <Button
        variant="outlined"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </Button>
    </ContactsItem>
  );
};

export default Contact;
