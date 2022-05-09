import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { Form } from 'reactstrap';
import { Button } from 'reactstrap';

//TODO delete hardcode
var allCourses = [
  {
    courseId: 0,
    date: '01-02-22',
    title: 'Get fit',
    description: 'Dieting, excercise and other important things',
    teacher: 'Chodakowska',
    isBought: 'yes' //właściwość użytkownika - czy ma wykupiony dostęp do kursu o danym courseId

  },
  {
    courseId: 1,
    date: '02-02-22',
    title: 'Get fit 2',
    description: 'Dieting, excercise and other important things',
    teacher: 'Chodakowska',
    isBought: 'no'
  },
  {
    courseId: 2,
    date: '02-05-22',
    title: 'Learn maths',
    description: '2+2=4',
    teacher: 'Pitagoras',
    isBought: 'yes'
  },
  {
    courseId: 3,
    date: '14-10-22',
    title: 'Learn music',
    description: 'la la la',
    teacher: 'Bethoven',
    isBought: 'no'
  },
];

export class AllCourses extends Component {
  static displayName = AllCourses.name;
//info dla niewtajemniczonych: wszyscy zalogowani widzą listę kursów
//student ma widoczny przycisk "buy course", co po wybraniu kursu (i pewnie wpisaniu bardzo "legitnych" cyferek konta) spowoduje zmianę statusu isBought w relacji student-course

  constructor(props) {
    super(props);
    this.state = {
      //TODO set courses to all courses in database, delete hardcode
      courses: allCourses,
      //TODO set user data to current user, delete hardcode
      userId: 0,
      role: 'student'
    };
  }

//TODO make this page available to all logged users

  savePayment(courseId) {
    //TODO zmiana statusu isBought dla kursu znalezionego po courseId dla obecnego użytkownika
    alert("Course purchased!");
    this.closePaymentModal(courseId);
  }

  openPaymentModal(courseId) {
    document.getElementById(`${courseId}-payment-modal`).style.display = 'block';
  }
  closePaymentModal(courseId) {
    document.getElementById(`${courseId}-payment-modal`).style.display = 'none';
  }



  render() {
    const paymentForm = 
         <form>
          <label>Card number</label>
          <input class="form-control" type="number" min="0" placeholder='00 00000000 0000000000000000'/>

          <label>Security code</label>
          <input class="form-control" type="number" min="0" placeholder='000'/>

        </form>
      ;

    const paymentModal = this.state.courses.map((course) => {
      let modalId = `${course.courseId}-payment-modal`;
      return (
        <div class="modal" id={modalId}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="popupTitle">Buy {course.title}</h5>
                <button type="button" class="close" onClick={() => {this.closePaymentModal(course.courseId)}} aria-label="Cancel">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {paymentForm}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={() => { this.closePaymentModal(course.courseId)}}>Close</button>
                <button type="button" class="btn btn-primary" onClick={() => {this.savePayment(course.courseId)}}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )
    });


    const CoursesTable = this.state.courses.map((course) => {
      return (
        <tr key={course.courseId}>
          <td>{course.date}</td>
          <td>{course.title}</td>
          <td>{course.description}</td>
          <td>{course.teacher}</td>
          <td className='d-flex justify-content-end'>
            {this.state.role == 'student' ?
              (course.isBought == 'yes' ? <Button className='btn btn-sm btn-light disabled'>Accessed</Button> : <Button className='btn btn-sm btn-warning' onClick={() => { this.openPaymentModal(course.courseId) }}>Buy now</Button>) : <span></span>
            }
          </td>        
          </tr>
      )
    })

    let Table;
    if (this.state.courses.length > 0) {
      Table =
        <table class="table table-hover z-index-0">
          <thead>
            <tr>
              <th>Date time</th>
              <th>Course</th>
              <th>Description</th>
              <th colSpan={2}>Teacher</th>
            </tr>
          </thead>
          <tbody ref={this.tableBody}>
            {CoursesTable}
          </tbody>
        </table>
    }

    return (
      <span>
        { paymentModal }
        <div>
          <div className="d-flex justify-content-between mb-3">
            <h1>Available courses:</h1>
            { this.state.role == 'student' ?  <Link className="btn btn-primary m-2" to="/student-courses">Go back to my courses</Link> :
             (this.state.role == 'teacher' ?  <Link className="btn btn-primary m-2" to="/teacher-courses">Go back to my classes</Link> :
             '')}
           
          </div>
          {Table}
        </div>
      </span>
    );
  }
}
