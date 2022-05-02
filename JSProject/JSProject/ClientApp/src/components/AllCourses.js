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

  constructor(props) {
    super(props);
    this.state = {
      courses: allCourses,
      showPaymentModal: true
    };
  }

  savePayment() {
    //TODO zmiana statusu isBought dla kursu znalezionego po courseId
    this.closeModal();
  }

  closeModal() {
    document.getElementById("popup").style.display = 'none';
  }

  render() {
    const paymentForm = 
        <form>
          ...
        </form>
      ;
    const paymentModal = this.state.courses.map((course) => {
      return (
        <div class="modal" id="popup">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="popupTitle">Access new course</h5>
                <button type="button" class="close" onClick={() => {this.closeModal()}} aria-label="Cancel">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {paymentForm}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={() => { this.closeModal()}}>Close</button>
                <button type="button" class="btn btn-primary" onClick={() => {this.closeModal()}}>Save changes</button>
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
            {course.isBought == 'yes' ? <Button className='btn btn-sm btn-light disabled'>Accessed</Button> : <Button className='btn btn-sm btn-warning' onClick={() => { document.getElementById("popup").style.display = 'block' }}>Buy now</Button>}
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
            <Link className="btn btn-primary m-2" to="/user-courses">Go back to my courses</Link>
          </div>
          {Table}
        </div>
      </span>
    );
  }
}
