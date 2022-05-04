import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import { Container } from 'reactstrap';
import Markup from 'react-html-markup';
import { Button } from 'reactstrap';

var materialsTemp0 = [
  [
    'img', 
    'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg'
  ],
  [
    'text',
    `You probably have some idea of how fit you are. But assessing and recording baseline fitness scores can give you benchmarks against which to measure your progress. To assess your aerobic and muscular fitness, flexibility, and body composition, consider recording: 
    <ul>
    <li>Your pulse rate before and immediately after walking 1 mile (1.6 kilometers\)</li> 
    <li>How long it takes to walk 1 mile, or how long it takes to run 1.5 miles (2.41 kilometers)</li>
    <li> How many standard or modified pushups you can do at a time</li>
    <li>How far you can reach forward while seated on the floor with your legs in front of you Your waist circumference, just above your hipbones Your body mass index</li>
    </ul>`
  ]
];

var materialsTemp1 = [
  [
    'img', 
    'https://cdn.mos.cms.futurecdn.net/v44n2mBJgaRoCkkFGjDtRP.jpeg'
  ],
  [
    'text',
    `How do I run without getting tired?
    <b>Warm Up. Avoid running without a warm-up first.</b> Performing some dynamic stretches and low-intensity aerobic exercise for five to 15 minutes before a run can help to reduce injury risk by warming up your muscles. Factor each warm-up into your training plan to avoid running out of time or coming up with excuses.`
  ]
];
 

//TODO delete hardcode
var allCourses = [
  {
    courseId: 0,
    date: '01-02-22', 
    title: 'Get fit', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska',
    materials: materialsTemp0 
     
  },
  {
    courseId: 1,
    date: '02-02-22', 
    title: 'Get fit 2', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska',
    materials: materialsTemp1
  },
];

export class AdminCourses extends Component {
  static displayName = AdminCourses.name;
//info dla niewtajemniczonych: admin może przeglądać wszysktie kursy + może tworzyć i usuwać kursy (ze względów czasowych możemy odpuścić sobie edycje i usuwanie materiałów)
  constructor(props) {
    super(props);    
    this.state = { 
      courses: allCourses,
      role: 'admin'
    };
  }

  openDeleteCourseModal(courseId) {
    document.getElementById(`${courseId}-delete-modal`).style.display = 'block';
  }
  closeDeleteCourseModal(courseId) {
    document.getElementById(`${courseId}-delete-modal`).style.display = 'none';
  }
  deleteCourse(courseId) {
    this.state.courses.splice(courseId, 1);
    //TODO save to database

    alert("Course deleted!");
    this.closeDeleteCourseModal(courseId);
  }

  openAddCourseModal() {
    document.getElementById("add-course-modal").style.display = 'block';
  }
  closeAddCourseModal() {
    document.getElementById("add-course-modal").style.display = 'none';
  }
  addCourse() {
    let id = this.state.courses.length;
    let date = document.getElementById("new-course-date").value;
    let title =  document.getElementById("new-course-title").value;
    let description =  document.getElementById("new-course-description").value;
    let teacher =  document.getElementById("new-course-teacher").value;
    let price =  document.getElementById("new-course-price").value;
    let access =  document.getElementById("new-course-access-days").value;
    let materials = [];
    
    //TODO dodać price do push jak będzie szło do bazy
    this.state.courses.push({
      courseId: id, 
      date: date, 
      title: title, 
      description: description, 
      teacher: teacher, 
      materials: materials
    });
  
    this.closeAddCourseModal();
    alert("Course added");

  }

  render() {
    const deleteCourseModal = this.state.courses.map((course) => {
      let modalId=`${course.courseId}-delete-modal`;
      return (
          <div class="modal" id={modalId}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="popupTitle">Confirm</h5>
                <button type="button" class="close" onClick={() => {this.closeDeleteCourseModal(course.courseId)}} aria-label="Cancel">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>              
              <div class="modal-body">
              <p>Are you sure you want to delete <strong>{course.title}</strong> and all its materials?</p>              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={() => { this.closeDeleteCourseModal(course.courseId)}}>Cancel</button>
                <button type="button" class="btn btn-primary" onClick={() => {this.deleteCourse(course.courseId)}}>DELETE</button>
              </div>
            </div>
          </div>
        </div>
      )
    });
    
    const addCourseForm = 
    <form>
     { /*TODO required fields */ }
      <label>Course date</label>
      <input type="date" id="new-course-date" class="form-control"/>

      <label>Title</label>
      <input type="text" id="new-course-title" class="form-control"/>

      <label>Description</label>
      <textarea id="new-course-description" class="form-control"/>

      <label>Teacher</label>
      <select class="form-control" name="teacher" id="new-course-teacher">
        <option value="none" selected disabled hidden>Select an Option</option>
        {/*TODO populate select options with teachers*/}
      </select>

      <label>Price $</label>
      <input type="number" id="new-course-price" class="form-control"/>

      <label>Access days</label>
      <input type="number" id="new-course-access-days" class="form-control"/>

    </form>
  ;

    const addCourseModal = this.state.courses.map((course) => {
      return (
          <div class="modal" id="add-course-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="popupTitle">Create new course</h5>
                <button type="button" class="close" onClick={() => {this.closeAddCourseModal()}} aria-label="Cancel">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>              
              <div class="modal-body">
                {addCourseForm}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={() => { this.closeAddCourseModal()}}>Cancel</button>
                <button type="button" class="btn btn-primary" onClick={() => {this.addCourse(course)}}>Save</button>
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
            <Button className='btn btn-sm btn-danger'  onClick={() => { this.openDeleteCourseModal(course.courseId) }}>Delete</Button>
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
        { deleteCourseModal }
        { addCourseModal }
        <div>
          <div className="d-flex justify-content-between mb-3">
            <h1>All courses: </h1>
            <button className="btn btn-info m-2" onClick={() => this.openAddCourseModal()}>Add new course</button>
          </div>
          {Table}
        </div>
      </span>
    );
  }
}
