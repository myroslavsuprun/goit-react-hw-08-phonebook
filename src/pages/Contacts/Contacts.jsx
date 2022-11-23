// import useModal from 'hooks/useModal';
//  Button
import { useTheme, Box, Typography } from '@mui/material';
import {
  AddContactForm,
  ContactsList,
  ContactsFilter,
  // Modal,
} from 'components';

const Contacts = () => {
  // const { open: ifModalOpen, handleToggle: handleModalToggle } = useModal();
  const theme = useTheme();

  // const handleOpenModal = () => {
  //   handleModalToggle();
  // };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {/* toggleModal={handleModalToggle} */}
        <AddContactForm />
        {/* Modal =( */}
        {/* <Button variant="contained" elevation="4" onClick={handleOpenModal}>
        Add new Contact
      </Button> */}
        {/* <Modal open={ifModalOpen} handleClose={handleModalToggle}>
        <AddContactForm toggleModal={handleModalToggle} />
      </Modal> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 250,
          }}
        >
          <Typography variant="h5" align="left" mb={theme.spacing(1)}>
            Contacts
          </Typography>
          <ContactsFilter />
          <ContactsList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
