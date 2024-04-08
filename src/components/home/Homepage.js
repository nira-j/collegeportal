import React from 'react';
import './homepage.css';
import univ from '../image/university6.jpg'
import principleImg from '../image/dummy1.jpg';

export default function Homepage() {
    return (
        <>
            <section>
                <div style={{ width: '100%', height: '100vh', margin: 'auto' }}>
                    <img src={univ} alt="No image found" style={{ width: '100%', height: '90%' }} />
                </div>
            </section>
 
            <section>
                <div id="notisection">
                    <div id="principlemsg">
                        <div style={{'background-color':'green',height: '30px', width:'400px',margin: 'auto', textAlign:'center'}}>
                            <h4>Principal's Message</h4>
                        </div>
                        
                        <img src={principleImg} alt="image not found" width='200' height='200' style={{margin: '10px 0px'}}/>
                        <p>Education in the words of W.B. Yeats, “is not the filling of a bucket but
                            the lightening of the fire”. Yes, education is about igniting change within;
                            forming men and women who would have the strength of character, the moral fibre,
                            and the courage of conviction to stand for what is right and just. It is about enabling
                            people with voice and choice.</p>
                    </div>
                    <div id="notification">
                        <h4>Notifications >>>></h4>
                        <ul style={{listStyle:'square'}}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum quis iste!</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint! Commodi, nemo expedita.</li>
                        </ul>
                        
                    </div>
                </div>
            </section>
          
            <section id='section3'>
                <div style={{display:'inline', color:'rgb(202, 91, 26)', width:'300px', height:'20px'}}>
                    <h4>Programmes Offered</h4>
                    <button style={{float:'right', margin: '-40px', height:'30px', 'border-radius':'20px', padding:'5px'}}>Explore Programmes</button>
                </div>
                <div id="programmsection">
                    <div className="col-md-3">BCOM</div>
                    <div className="col-md-3">BCA</div>
                    <div className="col-md-3">MCA</div>
                    <div className="col-md-3">MCOM</div>
                </div>
            </section>
           
            <section>
                <div className='row' id="section4">
                    <div className="col-md-4">
                        <h4>Addmission</h4>
                        <li>Overview</li>
                        <li>Admission Criteria</li>
                        <li>Programme Fee</li>
                        <li>How to Apply</li>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick links</h4>
                        <li>Programmes</li>
                        <li>Photo Gallary</li>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact us</h4>
                        <li>Address: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quo.</li>
                        <li>phone no.: 9966078768</li>
                        <li>Email id.: xyzcol3444@gmail.com</li>
                    </div>
                </div>
            </section>

        </>
    );
}