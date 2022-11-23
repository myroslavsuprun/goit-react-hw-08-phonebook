import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contactsSlice';

import { IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Box
      sx={{
        maxWidth: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{phone}</Typography>
      </Box>
      <IconButton
        disabled={isLoading}
        color={!isLoading ? 'primary' : 'none'}
        onClick={() => deleteContact(id)}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
