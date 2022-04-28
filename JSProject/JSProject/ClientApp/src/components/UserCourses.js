import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';

export class UserCourses extends Component {
  static displayName = UserCourses.name;

  constructor(props) {
    super(props);
    this.courses = [
      ['01-02-22', 'Get fit', 'Dieting, excercise and other important things', 'Chodakowska' ],
      ['02-02-22', 'Get fit 2', 'Dieting, excercise and other important things', 'Chodakowska' ]
    ];
  }
//TODO do naprawy Daga
  // renderTableBody() {
  //   let data = [];
  //   for (let i = 0; i < this.courses.length; i++) {
  //     for (let j = 0; j < this.courses[i].length; j++) {
  //       data.push(<td>{data[i][j]}</td>)
  //     }
  //   }
  //   return data;
  // }


  render() {
    // //TODO Daga delete hardcode:
    // var courses = ['1', '2', '3'];

    // var tr = null;
    // var tbody = null;

    // function renderTableBody() {
    //   // for (let element of courses) {
    //     tr = document.createElement("tr");
    //     tr.innerHTML = "<td>01.01.2000</td><td>Get fit</td><td>Dieting, excercise and other important things</td><td>Chodakowska</td>";
    //   //}
    //  document.getElementById("table-body").appendChild(tr);
    // }

    return (    
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h1>Your courses:</h1>  
          <Link className="btn btn-primary m-2" to="/all-courses">See all our courses</Link>
                    
        </div>
        <table class="table table-hover">
          <thead>
          
            <tr>
              <th scope="col">Date time</th>
              <th scope="col">Course</th>
              <th scope="col">Description</th>
              <th scope="col">Teacher</th>
            </tr>
          </thead>
          <tbody id="table-body">     
          {/* TODO Daga */}
          {/* {
           this.renderTableBody()
          }
             */}
           <tr>
             <td>{this.courses[0][0]}</td>
             <td>{this.courses[0][1]}</td>
             <td>{this.courses[0][2]}</td>
             <td>{this.courses[0][3]}</td>
           </tr>
            
          </tbody>
        </table>

      </div>
    
    );
  }
}
