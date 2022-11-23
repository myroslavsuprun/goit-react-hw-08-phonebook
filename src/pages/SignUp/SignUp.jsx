import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Typography, TextField, Box, useTheme, Button } from '@mui/material';

import { AuthForm } from 'components';
import { useRegisterMutation } from 'redux/authSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'constants/routes';

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
  const [registerUser, registerStatus] = useRegisterMutation();
  const navigate = useNavigate();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema: signUpSchema,
    validateOnBlur: false,
    onSubmit: ({ email, username: name, password }) => {
      registerUser({
        email,
        name,
        password,
      });
    },
  });

  useEffect(() => {
    if (registerStatus.isSuccess) {
      formik.resetForm();
      toast.success('You have successfully registered');
      navigate(ROUTES.contacts);
    }
  }, [registerStatus, navigate, formik]);

  return (
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
        error={Boolean(formik.touched.username && formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        id="username"
        name="username"
        type="username"
        label="Username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />

      <AuthForm formik={formik} />
      {registerStatus.error && (
        <Typography
          variant="body1"
          color={theme.palette.warning.main}
          align="center"
        >
          This user is already registered
        </Typography>
      )}

      <Button
        sx={{ width: '120px', mx: 'auto' }}
        variant="contained"
        type="submit"
      >
        {registerStatus.isLoading ? 'Signing up' : 'Sign up'}
      </Button>
    </Box>
  );
};

export default SignUp;
