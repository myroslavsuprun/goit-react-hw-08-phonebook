import useModal from 'hooks/useModal';
import { useTheme, Button, Box, Typography } from '@mui/material';
import {
  AddContactForm,
  ContactsList,
  ContactsFilter,
  Modal,
} from 'components';

const Contacts = () => {
  const { open: ifModalOpen, handleToggle: handleModalToggle } = useModal();
  const theme = useTheme();

  const handleOpenModal = () => {
    handleModalToggle();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 5,

          [theme.breakpoints.down('sm')]: {
            gap: 3,
            flexDirection: 'column',
            alignItems: 'center',
          },
          [theme.breakpoints.up('sm')]: {
            gap: 10,
            alignItems: 'start',
          },
        }}
      >
        <Button
          sx={{
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
          }}
          variant="contained"
          elevation="3"
          onClick={handleOpenModal}
        >
          Add new Contact
        </Button>
        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        >
          <AddContactForm />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 250,
          }}
        >
          <Typography variant="h5" align="center" mb={theme.spacing(1)}>
            Contacts
          </Typography>
          <ContactsFilter />
          <ContactsList />
        </Box>
      </Box>
      <Modal open={ifModalOpen} handleClose={handleModalToggle}>
        <AddContactForm toggleModal={handleModalToggle} />
      </Modal>
    </>
  );
};

export default Contacts;
