import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, TextField, Button, Typography, useTheme } from '@mui/material';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const additionSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter contact's name")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    ),

  number: Yup.string()
    .required("Please enter contact's number")
    .matches(
      /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3,6}$/,
      'Please enter correct phone number with 9-13 digits'
    ),
});

function AddContactForm() {
  const [addContact, addContactStatus] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: additionSchema,
    onSubmit: ({ name, number }) => {
      const foundContact = contacts.find(contact => {
        const contactName = contact.name.toLowerCase();
        return contactName === name.toLowerCase();
      });

      if (foundContact) {
        return alert(`${name} is already in contacts`);
      }

      addContact({ name, number });
      // toggleModal();
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (addContactStatus.isSuccess) {
      toast.success('Contact has been successfully added!');
    }
  }, [addContactStatus]);

  return (
    <Box sx={{ position: 'relative', width: 300 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 'inherit',
          position: 'fixed',
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h5" align="left" mb={theme.spacing(1)}>
          Add new contact
        </Typography>
        <TextField
          id="name"
          name="name"
          type="name"
          label="Enter name"
          error={formik.touched.name && formik.errors.name ? true : false}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="filled"
          margin="normal"
        />

        <TextField
          id="number"
          name="number"
          type="number"
          label="Enter number"
          error={formik.touched.number && formik.errors.number ? true : false}
          value={formik.values.number}
          helperText={formik.touched.number && formik.errors.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="filled"
          margin="normal"
        />

        <Button
          disabled={addContactStatus.isLoading}
          variant="contained"
          sx={{ width: 100, alignSelf: 'center' }}
          type="submit"
        >
          {addContactStatus.isLoading ? `Adding` : `Add`}
        </Button>
      </Box>
    </Box>
  );
}

export default AddContactForm;
