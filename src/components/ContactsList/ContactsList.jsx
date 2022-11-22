// Hooks
import { useContacts } from 'hooks/useContacts';

// Components
import { Loader, Contact } from 'components';
import { Typography, useTheme } from '@mui/material';

const ContactsList = () => {
  const theme = useTheme();
  const infoColor = theme.palette.info.main;

  const {
    data: contacts,
    isLoading,
    isError,
    isUninitialized,
    error,
  } = useContacts();

  const mapCallback = ({ name, number, id }) => (
    <Contact name={name} phone={number} id={id} key={id} />
  );

  const onError = isError;
  const onLoading = isLoading;
  const onFullfilled = !isLoading && !isError && !isUninitialized;

  return (
    <>
      {onError && <p>{error.error}</p>}
      {onLoading && <Loader />}
      {onFullfilled && contacts?.length !== 0 && contacts.map(mapCallback)}
      {contacts?.length === 0 && (
        <Typography variant="h6" color={infoColor} align="center">
          No contacts added yet...
        </Typography>
      )}
    </>
  );
};

export default ContactsList;
