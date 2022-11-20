import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

import { updateFilter } from 'redux/filterSlice';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      filterName: '',
    },
    handleChange: value => {
      console.log(value);
    },
  });

  const onInputChange = e => {
    formik.handleChange(e);
    let currentValue = e.target.value;
    dispatch(updateFilter(currentValue));
  };

  return (
    <TextField
      id="filterName"
      name="filterName"
      type="filterName"
      label="Search"
      value={formik.values.filterName}
      onChange={onInputChange}
      variant="outlined"
      margin="normal"
      placeholder="Ivan Ivanov"
      sx={{ mb: 2 }}
    />
  );
};

export default ContactsFilter;
