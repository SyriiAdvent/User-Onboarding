import React, { useState } from "react";
import axios from 'axios'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";
import Checkbox, { CheckBox } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

import UserCards from './UserCard'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem',
    border: 'solid'
  },
  inputBox: {
    margin: '1rem',
  },
  submit: {
    width: '100%',
    display: 'flex',
    // flexDirection: 'space-between'
    marginLeft: '1rem',

  },
  btn: {
    marginLeft: '10rem',
  }
}))

const validateUser = Yup.object().shape({
  fName: Yup.string("")
    .min(3, 'Too short!')
    .max(12, 'Your name isnt this long!')
    .required('Required'),
  lName: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'Your last name isnt this long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8-32 characters long.')
    .max(32, '32 characters maximium')
    .required('Required'),
  tos: Yup.boolean()
    .required(),
})

const UserForm = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   console.log(`Status has changed!`, status)
  //   status && setUsers([...users, status])
  // }, [input])

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{ fName: '', lName: '', email: '', password: '', tos: false }}
        validationSchema={validateUser}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          axios.post('https://reqres.in/api/users', data)
            .then(response => {
              setSubmitting(true)
              setUsers(users => [...users, data])
              console.log(`Successfully posted form data to server: `, response)
            })
            .catch(error => console.error(`Couldn't send form data: `, error))
          // ^ Makes the Async Call for Data
          console.log('Submitted data: ', data);
          setSubmitting(false)
          resetForm()
        }}
      >
        {/* {({ values, handleChange, isSubmitting, handleSubmit, handleBlur, resetForm }) => ( <-- Formik will auto use these in Form-Fields under the hood like a boss!!!  */}
        {({ values, isSubmitting, errors, touched }) => (
          <Form autoComplete='off'>
            <Field 
              name='fName'
              label='First Name'
              as={TextField} 
              className={classes.inputBox}
              error={errors.fName && touched.fName ? errors.fName : null }
              helperText={errors.fName}
            />
            
            <Field 
              name='lName'
              label='Last Name' 
              as={TextField} 
              className={classes.inputBox}
              error={errors.lName && touched.lName ? errors.lName : null }
              helperText={errors.lName}
            />
            <br/>
            <Field 
              name='email'
              label='Email' 
              as={TextField} 
              className={classes.inputBox}
              error={errors.email && touched.email ? errors.email : null }
              helperText={errors.email}
            />
            <Field 
              name='password'
              label='Password' 
              type='password'
              as={TextField} 
              className={classes.inputBox}
              error={errors.password && touched.password ? errors.password : null }
              helperText={errors.password}
            />
            <div className={classes.submit}>
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
              <Field className={classes.btn} type='submit' disabled={isSubmitting} as={Button} >Submit</Field>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
      <div>
            {users.map(ele => <UserCards data={ele} /> )}
      </div>
    </div>
  );
};

export default UserForm;


// onSubmit={(data, {setSubmitting, resetForm}) => {
//   setSubmitting(true)
//   // ^ Makes the Async Call for Data
//   console.log('Submitted data: ', data);
//   setSubmitting(false)
//   resetForm()
// }}