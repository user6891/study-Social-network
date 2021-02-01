import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),

  password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const LoginForm = (props) => (
  <Formik
    initialValues={{
      login: '',
      password: '',
      rememberMe: false,
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, { resetForm }) => {
      // same shape as initial values
      console.log(values);
      props.login(values.login, values.password, values.rememberMe);
      resetForm();
    }}
  >
    {({ errors, touched }) => (
      <Form>
        
          <div>
            <label>
              login
              <Field name="login" />
            </label>

            {errors.login && touched.login ? <div>{errors.login}</div> : null}
          </div>
          <div>
            <label>
              password
              <Field name="password" />
            </label>

            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <div>
            <label>
              Remember Me
              <Field type="checkbox" name="rememberMe" />
            </label>
          </div>

          <button type="submit">Submit</button>
       
      </Form>
    )}
  </Formik>
);

export default LoginForm;
