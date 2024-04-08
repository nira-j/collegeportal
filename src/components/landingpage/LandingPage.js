import React from 'react'
import './landingpage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = function (props) {

    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className='profilecontent'>
                    <h3>Student Profile</h3>
                    <div className="row">
                        <div className="col-sm-4 profiledetails"> Student Name: {props.userdetails.firstname+' '+props.userdetails.lastname}</div>
                        <div className="col-sm-4 profiledetails"> Exam Rollno: {props.userdetails.examrollno}</div>
                        <div className="col-sm-4 profiledetails"> Course: {props.userdetails.course}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 profiledetails">Email id.: {props.userdetails.emailid}</div>
                        <div className="col-sm-4 profiledetails">Mobile no.:{props.userdetails.mobileno}</div>
                        <div className="col-sm-4 profiledetails">Registration no.: {props.userdetails.regno}</div>
                    </div>
                    <label htmlFor="name"></label>
                </div>

                <div className='cardcontainer'>
                    <button className='btn btn-success' onClick={() => navigate("/user/examform")}>Apply For Examination</button>
                    <button data-target="#resultModal" data-toggle="modal" className='btn btn-success'>Result</button>
                    <button className='btn btn-success'>Scrutiny</button>
                    
                </div>
            </div>

            <div className="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search Result</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{ 'padding-left': '50px', 'padding-right': '50px' }}>
                                <div className='row'>
                                    <label htmlFor="rollno">Select Course</label>
                                    <select name="" id="" className='form-control'>
                                    </select>
                                </div>
                                <div className="row">
                                    <label htmlFor="rollno">Enter roll no.</label>
                                    <input type="text" placeholder='Enter rollno' className='form-control' />
                                </div>
                                <div className="row">
                                    <label htmlFor="semester">Select semester</label>
                                    <select name="" id="" className='form-control'>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage