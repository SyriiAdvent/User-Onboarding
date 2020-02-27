import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem',
  },
  inputBox: {
    margin: '1rem',
  }
}))

const UserForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{ fName: '', lName: '' }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // ^ Makes the Async Call for Data
          console.log('Submitted data: ', data);
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ values, handleChange, isSubmitting, handleSubmit, handleBlur, resetForm }) => (
          <Form onSubmit={handleSubmit} autoComplete='off' >
            <Field as={TextField} 
              className={classes.inputBox}
              id='fName'
              name='fName'
              label='First Name' 
              value={values.fName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field as={TextField} 
              className={classes.inputBox}
              id='lName'
              name='lName'
              label='Last Name' 
              value={values.lName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br/>
            <Button type='submit' disabled={isSubmitting} >Submit</Button>

            <hr />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;


{/* <label htmlFor="name">
              Name {""}
              <Field component={TextField} label='First Name' name="fName" id="fName" placeholder="First Name" />
              <Field name="lName" id="lName" placeholder="Last Name" />
            </label>{" "}
            <br />
            <label htmlFor="email">
              Email <Field name="email" />
            </label>{" "}
            <br />
            <label htmlFor="password">
              Password <Field name="password" />
            </label>{" "}
            <br />
            <label htmlFor="tos">
              Terms of Service <Field type="checkbox" name="tos" />
            </label>
            <TextField  /> */}