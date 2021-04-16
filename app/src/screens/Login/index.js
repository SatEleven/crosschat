import styles from "./Login.module.scss";

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .typeError("Must be a string of characters")
        .min(1, "Must be between 1 to 255 characters")
        .max(255, "Must be between 1 to 255 characters"),

      password: Yup.string()
        .required("Required")
        .typeError("Must be a string of characters")
        .min(1, "Must be between 1 to 255 characters")
        .max(255, "Must be between 1 to 255 characters"),
    }),

    onSubmit: (values) => {
      props.loginAction({
        username: values.username,
        password: values.password,
      });
    },
    enableReinitialize: true,
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>Crosschat</header>
      <div className={styles.content}>
        <div className={styles.formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>
                Username or email address
              </label>
              <input
                className={styles.input}
                id="inputUsername"
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : null}
            </div>
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>Password</label>
              <input
                className={styles.input}
                id="inputPassword"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null}
            </div>
            <div className={styles.login}>
              <div className={styles.loginButton} onClick={formik.handleSubmit}>
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
