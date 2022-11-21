import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Typography, Box, useTheme, Button } from '@mui/material';

import { AuthForm } from 'components';

const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correct your email to "mail@mail.com"')
    .required('Please, enter your email'),
  password: Yup.string()
    .required('Please, enter your password')
    .matches(/^[A-Za-z\d@$!%*#?&]{8,}$/, 'Please, enter at least 8 symbols')
    .matches(
      /^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Please, use at least one capital letter'
    )
    .matches(
      /^(?=.*\d)(?=.*[0-9])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Please, enter at least one number'
    ),
});

const LogIn = () => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(1.5),
          margin: '0 auto',
          width: '340px',
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography align="center" variant="h3" gutterBottom>
          Log In
        </Typography>
        <AuthForm formik={formik} />

        <Button
          sx={{ width: '120px', mx: 'auto' }}
          variant="contained"
          type="submit"
        >
          Log In
        </Button>
      </Box>
    </>
  );
};

export default LogIn;