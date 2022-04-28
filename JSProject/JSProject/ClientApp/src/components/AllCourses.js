import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class AllCourses extends Component {
  static displayName = AllCourses.name;

  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <div>
        <div>
          <h1>All available courses:</h1>  
          <button className="btn btn-primary" to="/all-courses">Return to your courses</button>
                    
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
