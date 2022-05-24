import { useState } from 'react';
import TextInput from '../CustomInputs/textInput';
import './auth.scss';

const SignIn = ({
  sendCred,
}) => {
  const [data, setData] = useState({});
  const handleChange = (e) => setData({ [e.target.name]: e.target.value  });
  const handleSubmit = (e) => {
    e.preventDefault();
    sendCred(data);
    setData({email:'', password:''});
  }

  const handleReset = (e) => {};

  return (
    <div className="sign-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <legend>SignIn into existent account</legend>
        <TextInput
          handleChange={handleChange}
          label="Email"
          fieldName="email"
          value={data.email}
          placeHolder="Enter your email"
          type="text"
        />
        <TextInput
          handleChange={handleChange}
          label="Password"
          fieldName="password"
          value={data.password}
          placeHolder="Enter your password"
          type="password"
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn