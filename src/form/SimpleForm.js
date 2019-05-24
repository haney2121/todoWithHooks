import React from 'react';
import useFormState from '../hooks/useFormState';


const SimpleForm = () => {
  //custom hook in hooks folder
  const [email, updateEmail, resetEmail] = useFormState('');
  const [firstName, updateFirstName, resetFirstName] = useFormState('');
  const [lastName, updateLastName, resetLastName] = useFormState('');
  const [password, updatePassword, resetPassword] = useFormState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    resetEmail()
    resetFirstName()
    resetLastName()
    resetPassword()
  }

  return (
    <div>
      <h1>{email} is the email for {firstName} {lastName}, the password could be {password}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={firstName} onChange={updateFirstName} />
      <input type="text" value={lastName} onChange={updateLastName} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SimpleForm;