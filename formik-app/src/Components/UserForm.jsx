import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";
import Checkbox, { CheckBox } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
        initialValues={{ fName: '', lName: '', email: '', password: '', tos: false }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // ^ Makes the Async Call for Data
          console.log('Submitted data: ', data);
          setSubmitting(false)
          resetForm()
        }}
      >
        {/* {({ values, handleChange, isSubmitting, handleSubmit, handleBlur, resetForm }) => ( <-- Formik will auto use these in Form-Fields under the hood like a boss!!!  */}
        {({ values, isSubmitting }) => (
          <Form autoComplete='off'>
            <Field 
              name='fName'
              label='First Name'
              as={TextField} 
              className={classes.inputBox}
            />
            <Field 
              name='lName'
              label='Last Name' 
              as={TextField} 
              className={classes.inputBox}
            />
            <br/>
            <Field 
              name='email'
              label='Email' 
              as={TextField} 
              className={classes.inputBox}
            />
            <Field 
              name='password'
              label='Password' 
              type='password'
              as={TextField} 
              className={classes.inputBox}
            />
            <div>
              <FormControlLabel control={
                <Field
                name='tos'
                type='checkbox'
                as={Checkbox}
                color='primary'
                />
                // <Checkbox color='primary' />
              }
                label='Terms of Service'
              />
              <Button type='submit' disabled={isSubmitting}>Submit</Button>
            </div>
            <hr />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

{/* <Field as={TextField} 
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
/> */}