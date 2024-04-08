import React, { useState } from 'react';
import axios from 'axios';
import signupBackground from '../image/university6.jpg';

export default function SignupPanel() {
  const styles = {
    rowmargin: {
      margin: '20px 0px'
    }
  };

  const [signupData, setSignupData] = useState({
    firstname: '',
    lastname: '',
    emailid: '',
    password: '',
    mobileno: '',
    profileimage: '',
    profilesignature: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9099/api/v1/user/signup', signupData);
      console.log('Server response:', response.data);
      alert("User created successfully !");
      
      setSignupData({
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        mobileno: '',
        profileimage: '',
        profilesignature: '',
        role: ''
      });
    } catch (error) {
      console.error('Error submitting signup data:', error);
      
    }
  };


  const checkPassword=(e)=>{
    if(signupData.password!==e.target.value){
        alert("password mismatch")
        return false;
    }else{
        return true;
    }
  };

  const signupstyles = {
    content:{
      width: '100%',
      height: '100%',
      'background': `url(${signupBackground})`,
      'background-repeat':'no-repeat',
      'background-size': '100% 100%' 
    },
    panelstyle:{
      margin:'auto',
      height: '100vh',
      width: '500px',
      'background-color': 'rgba(0, 0, 0, 0.3)'

    }
  };

  const isFormFilled = () => {
    return Object.values(signupData).every(value => value.trim() !== '');
  };
  return (
    <div className='container' style={signupstyles.content}>
      <div className='panel' style={signupstyles.panelstyle }>
       
        <div className="panel-body">
          <div className="panel-body" style={{ padding: '5px' }}>
            <form onSubmit={handleSubmit}>
              <div className="row" style={styles.rowmargin}>
                <div className="col-md-6">
                  <label htmlFor="firstname">Enter first name</label>
                  <input className="form-control" type="text" placeholder='Enter first name' name="firstname" value={signupData.firstname} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                <label htmlFor="lastname">Enter last name</label>
                  <input className="form-control" type="text" placeholder='Enter last name' name="lastname" value={signupData.lastname} onChange={handleChange} />
                </div>
              </div>

              <div className="row" style={styles.rowmargin}>
                <div className="col-md-6">
                <label htmlFor="emailid">Enter emailid</label>
                  <input className="form-control" type="email" placeholder='Enter email id' name="emailid" value={signupData.emailid} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                <label htmlFor="mobileno">Enter mobile no.</label>
                  <input className="form-control" type="text" maxLength="10" placeholder='Enter mobile no.' name="mobileno" value={signupData.mobileno} onChange={handleChange} />
                </div>
              </div>

              <div className="row" style={styles.rowmargin}>
                <div className="col-md-6">
                <label htmlFor="password">Enter password</label>
                  <input className="form-control" type="password" placeholder='Enter password' name="password" value={signupData.password} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                <label htmlFor="password">Retype password</label>
                  <input className="form-control" type="password" name="retype" placeholder='Retype password' onBlur={checkPassword}/>
                </div>
              </div>

              <div className="row" style={styles.rowmargin}>
                <div className="col-md-6">
                  <label htmlFor="profileimage">Upload Profile image</label>
                  <input className="form-control" type="file" name="profileimage" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="profilesignature">Upload Signature image</label>
                  <input className="form-control" type="file" name="profilesignature" onChange={handleChange} />
                </div>
              </div>

              <div style={{ float: 'right', marginTop: '20px' }}>
                <button className='btn btn-success' type="submit" disabled={!isFormFilled()}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
