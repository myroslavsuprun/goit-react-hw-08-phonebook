import { useFormik } from 'formik';
import * as Yup from 'yup';

import { TextField } from '@mui/material';

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
    <form onSubmit={formik.handleSubmit}>
      {formik.touched.password}
      <TextField
        error={formik.touched.email && formik.errors.email ? true : false}
        id="email"
        name="email"
        type="email"
        label="Email"
        helperText={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      <TextField
        error={formik.touched.password && formik.errors.password ? true : false}
        id="password"
        name="password"
        type="password"
        label="Password"
        helperText={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LogIn;
