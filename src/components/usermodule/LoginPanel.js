import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import signinBackground from '../image/university6.jpg';

export default function LoginPanel(props) {

    const navigate = useNavigate();
    const [signinData, setSigninData]=useState(
        {
            'username': '',
            'password': ''
        }
    );
    const styles = {
        content: {
            'display': 'flex',
            'align-items': 'center',
            'width': '100%',
            'margin-top': '0px',
            'background': `url(${signinBackground})`,
            'background-repeat':'no-repeat',
            'background-size': '100% 100%' 
        },
        panelstyle: {
            'background-color': 'rgba(0, 0, 0, 0.3)',
            'width': '400px',
            'height':'100vh',
            'margin': 'auto',
        }
    }

    const handleSignindata=(e)=>{
        const { name,value }=e.target;
        setSigninData({...signinData, [name]: value});
    }

    const handleSignin=(e)=>{
        
        e.preventDefault();
        axios.get('http://localhost:9099/api/v1/signin/'+signinData.username+"/"+signinData.password).then(function(response){
            if(response.status=='200'){
                props.setUserdetails(response.data);
                props.setIssignin("true")
                navigate("/user/ladingpage")
            }
            else{
                alert("Bad credentials");
            }
        })
    }

    return (
        <div className="container" style={styles.content}>
           
            <div className='panel' style={styles.panelstyle}>
                
                <div className='panel-body' style={{ 'padding': '40px' }}>
                    <form onSubmit={handleSignin}>
                        <label htmlFor="user" style={{ 'margin-top': '10px' }}>Username</label>
                        <input type="text" className='form-control' name="username" placeholder='Enter username' onChange={handleSignindata}/>
                        <label htmlFor="pass" style={{ 'margin-top': '20px' }}>Password</label>
                        <input type="password" className='form-control' name="password" placeholder='Enter password' onChange={handleSignindata}/>
                        <button className='btn btn-success form-control' style={{ 'margin-top': '20px', 'margin-bottom': '20px' }} type="submit">Sign in</button>
                        <span><a>Forget password</a></span>
                        <button className='btn btn-success form-control' style={{ 'margin-top': '20px', 'margin-bottom': '20px' }} onClick={()=>navigate("/signup")}>Sign up</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}