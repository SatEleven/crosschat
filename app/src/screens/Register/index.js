import styles from "./Register.module.scss";

import { useFormik } from "formik";
import * as Yup from "yup";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .typeError("Must be a string of characters")
        .min(1, "Must be between 1 to 255 characters")
        .max(255, "Must be between 1 to 255 characters"),

      email: Yup.string()
        .required("Required")
        .email("Invalid email")
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
      props.registerAction({
        username: values.username,
        email: values.email,
        password: values.password,
      });
    },
    enableReinitialize: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>Username</label>
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
              <label className={styles.formFieldLabel}>Email address</label>
              <input
                className={styles.input}
                id="inputEmailAddress"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
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
            <div className={styles.registerButtonContainer}>
              <button
                className={styles.registerButton}
                onClick={formik.handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
