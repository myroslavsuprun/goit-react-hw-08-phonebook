import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Typography, TextField, Box, useTheme, Button } from '@mui/material';
import { AuthForm } from 'components';

const signUpSchema = Yup.object().shape({
  username: Yup.string().required('Please, enter your username'),
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

const SignUp = () => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema: signUpSchema,
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
          margin: '0 auto',
          gap: theme.spacing(1.5),
          width: '340px',
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography align="center" variant="h3" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          error={
            formik.touched.username && formik.errors.username ? true : false
          }
          id="username"
          name="username"
          type="username"
          label="Username"
          helperText={formik.touched.username && formik.errors.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />

        <AuthForm formik={formik} />
        <Button
          sx={{ width: '120px', mx: 'auto' }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUp;
