import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//TODO delete hardcode
var courses = [
  {
    courseId: 0,
    date: '05-02-22', 
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
  static displayName = courses.name;
  
  //info dla niewtajemniczonych: calendar wyświetla się wszystkim zalogowanym, ALE
  //każdy użytkownik widzi je adekwatnie do swojej roli - basically: 
  //widzi to co w student/teacher/adminCourses BEZ materials, Z datą
  constructor(props) {
    super(props);   
    this.state = { 
      calendar: courses,
      role: 'teacher'
    }; 
  }  

  getCourses() {
    //axios.post('http://...', data)
    axios.get('Course/GetCourseList')
    .then(res =>  {
      console.log(res);
      //console.log(JSON.parse(localStorage.getItem('JSProjectuser:http://localhost:5000:JSProject')).id_token);
    })
    .catch(al => {
      console.log(al);
    })

  }

  getCurrentUser() {
    axios.get('User/CurrentUser')
    .then(res =>  {
      alert(res);
      this.state.role = res.role;
      //console.log(JSON.parse(localStorage.getItem('JSProjectuser:http://localhost:5000:JSProject')).id_token);
    })
    .catch(al => {
      console.log(al);
    })
  }

  render() {

    const CoursesCalendarTable = this.state.calendar.map((course) => {
      return (
        <tr key={course.courseId}>
          <td>{course.date}</td>
          <td>{course.title}</td>
          <td>{course.description}</td>
          <td>{course.teacher}</td>  
        </tr>
      )
    })

    let Table;
    if(this.state.calendar.length > 0) {
      Table  = 
      <table className="table table-hover">
      <thead>      
        <tr>
          <th className='col-2'>Date</th>
          <th className='col-2'>Course</th>
          <th className='col-6'>Description</th>
          <th className='col-2'>Teacher</th>
        </tr>
      </thead>
      <tbody ref={this.tableBody}>         
        { CoursesCalendarTable }
      </tbody>
    </table>
    }
   


    return (    
      <div onLoad={() => this.getCurrentUser()}>
        <div className="d-flex justify-content-between mb-3">
          <h1>My events:</h1>  
                    
        </div>
      
      { Table }

<button onClick={() => this.getCourses()}>Click</button>
      </div>
    
    );
  }
}
