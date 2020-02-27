import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";

const InputField = (props) => {
  return (
    <Field
      component={TextField}
      id="fName"
      name="fName"
      label="First Name"
      value={values.fName}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default InputField;
