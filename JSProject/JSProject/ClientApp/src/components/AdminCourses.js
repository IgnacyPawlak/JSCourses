import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import { Container } from 'reactstrap';
import Markup from 'react-html-markup';
//import cupcake from '../resources/img/cupcake.png';

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
//TODO strona dostępna tylko dla admina
  render() {
    const CoursesTables = this.state.courses.map((course) => {
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
            </tr>
            {course.materials.map((material) => {
              if (material[0] == 'img') {
                return (
                  <tr>
                    <td colSpan={2}>
                      <img src={material[1]} alt="image"  className='w-100'/>
                    </td>
                  </tr>
                )
              }
              else  if (material[0] == 'text') {
                return (
                  <tr>
                    <td colSpan={2}>
                      <Markup className='text-justify' htmlString={material[1]}/>
                     {/* {material[1]} */}
                    </td>
                  </tr>
                )
              }
               
            })
            }

          </tbody>
        </table>
      )
    })

    let Courses;
    if(this.state.courses.length > 0) {
      Courses  =  
      <table className='w-100'>
        { CoursesTables }       
      </table>
    }
    else {
      Courses = <p>You haven't signed up for any courses yet.</p>
    }
   
    return (    
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h1>My courses:</h1>  
          <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>                    
        </div>
      
      { Courses }

      </div>
    
    );
  }
}
