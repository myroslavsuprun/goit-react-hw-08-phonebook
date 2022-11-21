import { TextField } from '@mui/material';

const AuthForm = ({ formik }) => {
  return (
    <>
      <TextField
        fullWidth
        error={Boolean(formik.touched.email && formik.errors.email)}
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
        fullWidth
        error={Boolean(formik.touched.password && formik.errors.password)}
        id="password"
        name="password"
        type="password"
        label="Password"
        helperText={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
    </>
  );
};

export default AuthForm;
