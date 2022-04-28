import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import { Container } from 'reactstrap';

//TODO delete hardcode
var userCourses = [
  {
    courseId: 0,
    date: '01-02-22', 
    title: 'Get fit', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska',
     
  },
  {
    courseId: 1,
    date: '02-02-22', 
    title: 'Get fit 2', 
    description: 'Dieting, excercise and other important things', 
    teacher: 'Chodakowska' 
  },
];

export class UserCourses extends Component {
  static displayName = UserCourses.name;

  constructor(props) {
    super(props);    
    this.state = { 
      courses: userCourses
    };
  }


//TODO do naprawy Daga
  // renderTableBody() {
  //   let data = [];
  //   for (let i = 0; i < this.courses.length; i++) {
  //     for (let j = 0; j < this.courses[i].length; j++) {
  //       data.push(<td>{data[i][j]}</td>);
  //     }
  //   }
  //   return data;
  // }

  render() {
//TODO course details on display


    const CoursesTable = this.state.courses.map((course) => {
      return (
        <table className="table table-hover w-100 mt-5 border-0">
          <thead>
            <tr key={course.courseId} className="border-bottom">
              <th colSpan={2} className="w-100 border-0">{course.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr className='w-100 border-top-0  text-secondary'>
              <td className='col-4'>
                Course date: {course.date} <br />
                Teacher: {course.teacher} <br />
              </td>
              <td className='col-6'>
                {course.description}
              </td>
              <td className='col d-flex justify-content-end'>
                  {/* TODO link do szczegółów kursu - inne szczegóły dla studenta, nauczyciela i admina*/}
                <div className='btn btn-success'>See details</div>
              </td>
            </tr>
          </tbody>
        </table>
      )
    })

    let Tables;
    if(this.state.courses.length > 0) {
      Tables  =  
      <table className='w-100'>
        { CoursesTable }       
      </table>
    }
   
    return (    
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h1>My courses:</h1>  
          <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>                    
        </div>
      
      { Tables }

      </div>
    
    );
  }
}
