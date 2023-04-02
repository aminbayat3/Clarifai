import { useState } from "react";

export const useFormFieldsUpdate = (defaultFormFields) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [body, setBody] = useState("");

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setBody(formFields);
    setFormFields(defaultFormFields);
  }

  return [ onHandleChange, formFields, onHandleSubmit, body ];
};


// look up "react-use" NPM package