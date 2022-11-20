import { useDeleteContactMutation } from 'redux/contactsSlice';

import { Button, Typography, Box } from '@mui/material';

const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{phone}</Typography>
      </Box>
      <Button
        size="medium"
        variant="outlined"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </Button>
    </Box>
  );
};

export default Contact;
