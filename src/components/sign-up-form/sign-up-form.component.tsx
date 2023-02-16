import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../store/user/user.selector';

import { signUpStart } from "../../store/user/user.action";

import "./sign-up-form.styles.scss";

let defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use");
      } else {
        console.log("error on creating user", error);
      }
    }
  };

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChanges}
          value={displayName}
          required
        />

        <FormInput label="Email" type="email" name="email" onChange={handleChanges} value={email} required />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChanges}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChanges}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
