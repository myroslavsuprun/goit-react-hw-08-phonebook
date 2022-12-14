// Hooks
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useLoginMutation } from 'redux/authSlice';

// Components
import { Typography, Box, useTheme, Button } from '@mui/material';
import { AuthForm } from 'components';
import { toast } from 'react-toastify';

// Constants
import ROUTES from 'constants/routes';

// Form validation
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correct your email to "mail@mail.com"')
    .required('Please, enter your email'),
  password: Yup.string().required('Please, enter your password'),
});

const LogIn = () => {
  const [loginUser, loginStatus] = useLoginMutation();
  const navigate = useNavigate();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => {
      loginUser({ email, password });
    },
  });

  useEffect(() => {
    if (loginStatus.isSuccess) {
      formik.resetForm();
      toast.success('You have successfully logged in');
      navigate(ROUTES.contacts);
    }
  }, [loginStatus, navigate, formik]);

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(1.5),
          margin: '0 auto',
          maxWidth: '340px',
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography align="center" variant="h3" gutterBottom>
          Log In
        </Typography>
        <AuthForm formik={formik} />
        {loginStatus.error && (
          <Typography
            variant="body1"
            color={theme.palette.warning.main}
            align="center"
          >
            Please enter correct login or password
          </Typography>
        )}
        <Button
          disabled={loginStatus.isLoading}
          sx={{ width: '120px', mx: 'auto' }}
          variant="contained"
          type="submit"
        >
          {loginStatus.isLoading ? 'Logging in' : 'Log in'}
        </Button>
      </Box>
    </>
  );
};

export default LogIn;
