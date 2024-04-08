
import React, { useState, useEffect} from 'react';
import './examform.css';
import axios from 'axios'


const ExamForm = (props) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    fathername: '',
    mothername: '',
    dob: '',
    gender: '',
    category: '',
    mobileno: '',
    course: '',
    courseid: '',
    medium: '',
    collegename: '',
    collegecode: '',
    regno: '',
    enrollmentno: '',
    rollno: '',
    semyr: '',
    studentid: '',
    profileimage: '',
    signatureimage: '',
    payment_amount: '',
    payment_status: '',
    payment_date: '',
    address: '',
    state: '',
    pin: '',
    district: '',
    course_type: '',
    email_id: '',
    session: '',
    student_type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const response=await axios.post('http://localhost:9099/api/v1/save/examform', formData);
      if(response.status==200){
        setFormData({
          firstname: '',
          lastname: '',
          fathername: '',
          mothername: '',
          dob: '',
          gender: '',
          category: '',
          mobileno: '',
          course: '',
          courseid: '',
          medium: '',
          collegename: '',
          collegecode: '',
          regno: '',
          enrollmentno: '',
          rollno: '',
          semyr: '',
          studentid: '',
          profileimage: '',
          signatureimage: '',
          payment_amount: '',
          payment_status: '',
          payment_date: '',
          address: '',
          state: '',
          pin: '',
          district: '',
          course_type: '',
          email_id: '',
          session: '',
          student_type: ''
        })
      }
    }catch(error){
      console.log(error);
    }
  };

  // useEffect(() => {
  //   toggleModal();
  // }, []);

  <div className="row">
  <div className="col-md-6">
    <label htmlFor="profileimage">Profile Image:</label>
    <input className="form-control" type="file" name="profileimage" />
  </div>
  <div className="col-md-6">
    <label htmlFor="signatureimage">Signature Image:</label>
    <input className="form-control" type="file" name="signatureimage" />
  </div>
</div>
 
  return (
    <div style={{'margin-bottom': '70px'}}>
      
      <form onSubmit={handleSubmit}>
        <div className="container">
        <h3>Exam Form</h3>
        <span><u>Basic Details</u></span>
          <div className="row">
            <div className="col-md-9">
              <div className="col-md-6">
                <label htmlFor="firstname">First Name:</label>
                <input className="form-control" type="text" name="firstname" onBlur={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname">Last Name:</label>
                <input className="form-control" type="text" name="lastname" onBlur={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="fathername">Father's Name:</label>
                <input className="form-control" type="text" name="fathername" onBlur={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="mothername">Mother's Name:</label>
                <input className="form-control" type="text" name="mothername" onBlur={handleChange}/>
              </div>

              <div className="col-md-6">
              <label htmlFor="dob">Date of Birth:</label>
              <input className="form-control" type="date" name="dob" onBlur={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="gender">Gender:</label>
              <select className="form-control" name="gender" onBlur={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            </div>
            <div className="col-md-3">
              <div id="profileimg">
                <input className="form-control" type="file" name="profileimage" onBlur={handleChange}/> 
              </div>
            </div>
          </div>
         
          
          <div className="row" style={{'padding-left': '15px'}}>
            <div className="col-md-4">
              <label htmlFor="category">Category:</label>
              <select className="form-control" name="category" onBlur={handleChange}>
                <option value="">Select Category</option>
                <option value="OBC">OBC</option>
                <option value="GEN">General</option>
                <option value="ST">ST</option>
                <option value="SC">SC</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="mobileno">Mobile No:</label>
              <input className="form-control" type="text" name="mobileno" onBlur={handleChange} value={props.mobileno}/>
            </div>
            <div className="col-md-4" id="signatureimg">
              <input className="form-control" type="file" name="signatureimage" onBlur={handleChange}/>
            </div>
          </div>
          <hr />
          <span><u>Acedemic Details</u></span>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="course">Course:</label>
              <select className="form-control" name="course" onBlur={handleChange}>
                <option value="">Select course</option>
                <option value="B.C.A.">Bachelor of Computer Application</option>
                <option value="M.C.A.">Master of Computer Application</option>
                <option value="B.Sc.">Master of Science</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="course_type">Course Type:</label>
              <select className="form-control" name="course_type" onBlur={handleChange}>
                <option value="ug">UG</option>
                <option value="pg">PG</option>
              </select>
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="collegename">College Name:</label>
              <input className="form-control" type="text" name="collegename" onBlur={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="regno">Registration No:</label>
              <input className="form-control" type="text" name="regno" onBlur={handleChange} value={props.regno}/>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="enrollmentno">Enrollment No:</label>
              <input className="form-control" type="text" name="enrollmentno" onBlur={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="rollno">Exam Roll No:</label>
              <input className="form-control" type="text" name="rollno" onBlur={handleChange} value={props.examrollno}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="semyr">Semester:</label>
              <select className="form-control" name="semyr" onBlur={handleChange}>
                <option value="">select semester</option>  
                <option value="1">1st</option>  
                <option value="2">2st</option>  
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="medium">Medium:</label>
              <select className="form-control" name="medium" onBlur={handleChange}>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
          </div>
        
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="session">Session:</label>
              <select className="form-control" name="session" onBlur={handleChange}> 
              <option value="">select session</option>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="student_type">Student Type:</label>
              <input className="form-control" type="text" name="student_type" onBlur={handleChange}/>
            </div>
          </div>
          <hr />
          <span><u>Address</u></span>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="address">Address:</label>
              <textarea className="form-control" name="address" onBlur={handleChange}></textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="pin">PIN:</label>
              <input className="form-control" type="text" name="pin" onBlur={handleChange}/>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <label htmlFor="district">District:</label>
              <input className="form-control" type="text" name="district" onBlur={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="state">State:</label>
              <input className="form-control" type="text" name="state" onBlur={handleChange}/>
            </div>
          </div>
        
        </div>
        <button style={{float: 'right'}} className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );  
   
};

 
export default ExamForm;