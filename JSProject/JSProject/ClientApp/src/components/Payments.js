import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form, Modal, ModalFooter } from 'reactstrap';
//TODO delete hardcode
var userCourses = [
  {
    courseId: 0,  
    courseTitle: 'Get fit', 
    coursePrice: 100,
    accessTimeDays: 30,
    paymentStatus: 'paid'
  },
  {
    courseId: 1,
    courseTitle: 'Maths', 
    coursePrice: 50,
    accessTimeDays: 60,
    paymentStatus: 'awaiting'
  },
];

export class Payments extends Component {
  static displayName = Payments.name;

  constructor(props) {
    super(props);
    this.state = { 
      courses: userCourses,
      showPaymentModal: false
    };
  }

 buyCourse() {
  let newCourseTitle = document.getElementById("newCourseTitle").value;
  var courseIndex = this.state.courses.findIndex(function(title) {
    return title = newCourseTitle;
  });
  console.log(courseIndex);
  this.setState({ showPaymentModal: false });
 }
 /* TODO: role - student */
  render() {
    
   
    const CoursesCalendarTable = this.state.courses.map((course) => {
      return (
        <tr key={course.courseId}>
          <td className='col-3'>{course.courseTitle}</td>      
          <td className='col-2'>{course.accessTimeDays} days</td>  
          <td className='col-2'>${course.coursePrice}</td>        
          <td className='col-2 text-capitalize'>{course.paymentStatus}</td>         
        </tr>
      )
    });

    let Table;
    if(this.state.courses.length > 0) {
      Table  = 
        <table className="table table-hover">
      <thead>      
        <tr>
          <th className='col-3'>Course</th>          
          <th className='col-2'>Access</th>
          <th className='col-2'>Price</th>
          <th className='col-4'>Payment</th>
          
        </tr>
      </thead>
      <tbody ref={this.tableBody}>         
        { CoursesCalendarTable }
      </tbody>
    </table>
    }

    return (    
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h1>My payments:</h1>  
          <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>
                    
        </div>
      { Table }

      </div>
    
    );
  }
}

