import { Button } from '@mui/material';

import {
  AddContactForm,
  Section,
  ContactsList,
  ContactsFilter,
  Modal,
} from 'components';

import useModal from 'hooks/useModal';

const Home = () => {
  const { open: ifModalOpen, handleToggle: handleModalToggle } = useModal();

  const handleOpenModal = () => {
    handleModalToggle();
  };

  return (
    <>
      <Button variant="contained" elevation="4" onClick={handleOpenModal}>
        Add new Contact
      </Button>
      <Modal open={ifModalOpen} handleClose={handleModalToggle}>
        <AddContactForm toggleModal={handleModalToggle} />
      </Modal>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </Section>
    </>
  );
};

export default Home;
