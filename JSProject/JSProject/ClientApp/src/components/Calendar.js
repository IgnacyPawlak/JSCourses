import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//TODO delete hardcode
var userCourses = [
  {
    courseId: 0,
    date: '01-02-22', 
    title: 'Get fit', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska' 
  },
  {
    courseId: 1,
    date: '02-02-22', 
    title: 'Get fit 2', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska' 
  },
];


export class Calendar extends Component {
  static displayName = Calendar.name;
  
  constructor(props) {
    super(props);   
    this.state = { 
      courses: userCourses
    }; 
  }  
  
  render() {

    const CoursesTable = this.state.courses.map((course) => {
      return (
        <tr key={course.courseId}>
          <td>{course.date}</td>
          <td>{course.title}</td>
          <td>{course.description}</td>
          <td>{course.teacher}</td>  
          <td className="d-flex justify-content-end">
              {/* TODO link do szczegółów kursu - inne szczegóły dla studenta, nauczyciela i admina*/}
                <div className='btn btn-success'>See details</div>
              </td>        
        </tr>
      )
    })

    let Table;
    if(this.state.courses.length > 0) {
      Table  = 
      <table className="table table-hover">
      <thead>      
        <tr>
          <th>Date time</th>
          <th>Course</th>
          <th>Description</th>
          <th colSpan={2}>Teacher</th>
        </tr>
      </thead>
      <tbody ref={this.tableBody}>         
        { CoursesTable }
      </tbody>
    </table>
    }
   
    return (    
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h1>My events:</h1>  
          <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>
                    
        </div>
      
      { Table }

      </div>
    
    );
  }
}
