import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import "./sign-in-form.styles.scss";

let defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart());
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
      setTimeout(() => navigate("/"), 1000);
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log("error", error);
      }
    }
  };

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" name="email" onChange={handleChanges} value={email} required />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChanges}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
