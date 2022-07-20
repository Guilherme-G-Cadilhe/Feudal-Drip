import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

let defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    navigate('/')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields();
      navigate('/')

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email")
          break;

        case "auth/user-not-found":
          alert("No user associated with this email")
          break;

        default:
          console.log('error', error)
      }
    }

  }

  const handleChanges = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }



  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" name="email"
          onChange={handleChanges} value={email}
          required />

        <FormInput label="Password" type="password" name="password"
          onChange={handleChanges} value={password}
          required />
        <div className='buttons-container'>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )

}
export default SignInForm