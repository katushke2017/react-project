import React from 'react';
import { Formik } from 'formik';
import styles from './RegistrationForm.module.css';
import Field from '../Field/Field';
import Button from '../Button/Button';

const INITIAl_VALUES = { email: '', username: '', password: '' };

const RegistrationForm = () => {
  const validators = ({ email, username, password }) => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!username) {
      errors.username = 'Name is required';
    } else if (username.length < 3) {
      errors.username = 'Name should be more then 3 symbols';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password should be more then 8 symbols';
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <Formik
        preventDefault
        initialValues={INITIAl_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field
              title="E-mail"
              type="email"
              name="email"
              placeholder="Input email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
            />
            <Field
              title="Username"
              type="text"
              name="username"
              placeholder="Input username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={errors.username && touched.username && errors.username}
            />

            <Field
              title="Password"
              type="password"
              name="password"
              placeholder="Input password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
            />
            <Button text="Registration" type="submit" disabled={isSubmitting} />
            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
