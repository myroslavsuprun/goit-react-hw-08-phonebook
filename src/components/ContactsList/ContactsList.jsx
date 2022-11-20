// Hooks
import { useContacts } from 'hooks/useContacts';

// Components
import { Loader, Contact } from 'components';
// import { ContactsListStyled } from './ContactsList.styled';

const ContactsList = () => {
  const {
    data: contacts,
    isLoading,
    isError,
    isUninitialized,
    error,
  } = useContacts();

  const mapCallback = ({ name, phone, id }) => (
    <Contact name={name} phone={phone} id={id} key={id} />
  );

  const onError = isError;
  const onLoading = isLoading;
  const onFullfilled = !isLoading && !isError && !isUninitialized;

  return (
    <>
      {onError && <p>{error.error}</p>}
      {onLoading && <Loader />}
      {onFullfilled && contacts.map(mapCallback)}
    </>
  );
};

export default ContactsList;
