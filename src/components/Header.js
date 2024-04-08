import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './image/univlogo.jpg';
import { useState } from 'react';

export default function Header(props) {

    const[signout, setSignout]=useState(false);
    const navigate = useNavigate();

    return (

        <nav class="navbar navbar-default" style={{ marginBottom: '0px' }}>
  <div class="container-fluid" style={{ paddingLeft: '100px' }}>
    <div class="navbar-header" style={{ display: 'flex' }}>
      <div style={{ marginRight: '50px' }}>
        <img src={logo} alt="Logo" style={{ height: 80, width: 80 }} />
      </div>
      <div style={{ marginTop: '10px', marginRight: '50px' }}>
        <a class="navbar-brand">XYZ College, place</a>
      </div>
    </div>
    <div style={{ display: 'inline-flex' }}>
      <ul class="nav navbar-nav">
        <li class="active"><a onClick={() => navigate('/')}>Home</a></li>
        <li><a onClick={() => navigate('/about')}>About</a></li>
        <li><a onClick={() => navigate('/courses')}>Programmes</a></li>
        <li><a onClick={() => navigate('/signin')}>Sign in</a></li>
        <li><a onClick={() => navigate('/signup')}>Sign up</a></li>
      </ul>
      {props.signin === 'true' && !signout &&(
        <button className="btn btn-success" style={{ float: 'right' }} onClick={() => {navigate('/'); setSignout(true)}}> Sign out</button>
      )}
    </div>
  </div>
</nav>

    );
}
