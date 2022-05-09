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
var teacherCourses = [
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

export class TeacherCourses extends Component {
    static displayName = TeacherCourses.name;
//info dla niewtajemniczonych: teacher przegląda kursy do których jest dopisany jako nauczyciel (trzeba by w Course zrobić tak, żeby dało się go powiązać z Teacher),
//teacher dodaje materiały do kursu
//teacher NIE tworzy, nie usuwa kursów, (ze wzgl. czasowych pomińmy usuwanie materiałów - trochę klikadełek na froncie to zajmuje, layout bla bla bla czasu ni ma)

    constructor(props) {
        super(props);
        this.state = {
            //TODO: set courses to courses where teacher==logged user
            courses: teacherCourses,
            //TODO: set role to user role
            role: 'teacher'
        };
    }
//TODO: make page available only for users with teacher role

    courseDetailsToggle(id) {
        document.getElementById(`${id}`).classList.toggle("d-none");
    }

    saveMaterials(courseId) {
        //console.log('before' + this.state.courses[courseId].materials);
        let newMaterialType = document.getElementById(`${courseId}-material-type`).value;
        let newMaterial = document.getElementById(`${courseId}-material`).value;

        // let materials = this.state.courses[courseId].materials;
        // materials.push([newMaterialType, newMaterial]);

        let newCourse = this.state.courses[courseId];
        newCourse.materials.push([newMaterialType, newMaterial]);
        
        this.setState(prevState => ({
            courses: prevState.courses.map(obj => (obj.courseId === courseId ? newCourse : obj))
        }));

        //TODO save to database

        console.log(courseId);

        this.closeAddMaterialsModal(courseId);

        document.getElementById(`${courseId}-material-type`).value = '';
        document.getElementById(`${courseId}-material`).value = '';
    }

    openAddMaterialsModal(courseId) {        
        document.getElementById(`${courseId}-modal`).style.display = 'block';
    } 

    closeAddMaterialsModal(courseId) {
        document.getElementById(`${courseId}-modal`).style.display = 'none';
    }  

    render() {    
        // const addMaterialsForm =
        // <form>
        //     <label>Type</label>
        //     <select class="form-control" name="material-type" id="material-type">
        //         <option value="none" selected disabled hidden>Select an Option</option>
        //         <option value="img">Image</option>
        //         <option value="text">Text</option>
        //     </select>
        //     <label>Material</label>
        //    <textarea class="form-control" id="material" placeholder='Enter your text or image URL'></textarea>
        // </form>
        // ;

        const addMaterialsModal = this.state.courses.map((course) => {
            let modalId=`${course.courseId}-modal`;
            return (
                <div class="modal" id={modalId}>
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="popupTitle">Add materials to {course.title}</h5>
                        <button type="button" class="close" onClick={() => {this.closeAddMaterialsModal(course.courseId)}} aria-label="Cancel">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                            <label>Type</label>
                            <select class="form-control" name="material-type" id={`${course.courseId}-material-type`}>
                                <option value="none" selected disabled hidden>Select an Option</option>
                                <option value="img">Image</option>
                                <option value="text">Text</option>
                            </select>
                            <label>Material</label>
                            <textarea class="form-control" id={`${course.courseId}-material`} placeholder='Enter your text or image URL'></textarea>
                        </form>
                        
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={() => { this.closeAddMaterialsModal(course.courseId)}}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={() => {this.saveMaterials(course.courseId)}}>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
        });


        const CoursesTables = this.state.courses.map((course) => {
            return (   
                <table className="table table-hover w-100 mt-5 border-0">
                    <thead>
                        <tr key={course.courseId} className="border-bottom">
                            <th className="border-0">                           
                                 <h2>{course.title}</h2>
                               </th>
                               <th className='d-flex justify-content-end'>
                                <button className='btn btn-sm btn-light' onClick={() => { this.courseDetailsToggle(course.courseId) }}>Details</button>
                                <button className='btn btn-sm btn-info' onClick={() => { this.openAddMaterialsModal(course.courseId) }}>
                                    Add materials
                                </button>
                                </th>                             
                        </tr>
                    </thead>
                    <tbody id={course.courseId} className='d-none'>
                        <tr className='w-100 border-top-0 text-secondary'>
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
                                            <img src={material[1]} alt="image" className='w-100' />
                                        </td>
                                    </tr>
                                )
                            }
                            else if (material[0] == 'text') {
                                return (
                                    <tr>
                                        <td colSpan={2}>
                                            <Markup className='text-justify' htmlString={material[1]} />
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
        if (this.state.courses.length > 0) {
            Courses =
                <table className='w-100'>
                    {CoursesTables}
                </table>
        }
        else {
            Courses = <p>You haven't signed up for any courses yet.</p>
        }

        return (
            <span>
                {addMaterialsModal}
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <h1>My classes:</h1>
                    <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>
                </div>

                {Courses}

            </div>
            </span>

        );
    }
}
