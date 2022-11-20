import { TextField } from '@mui/material';

const AuthForm = ({ formik }) => {
  return (
    <>
      <TextField
        fullWidth
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
        fullWidth
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
    </>
  );
};

export default AuthForm;
