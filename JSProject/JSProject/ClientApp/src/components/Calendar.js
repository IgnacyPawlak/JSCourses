import React, { Component } from 'react';

export class Calendar extends Component {
  static displayName = Calendar.name;

  constructor(props) {
    super(props);    
  }
  
  //TODO delete hardcode
  loggedIn = new Boolean();
  loggedIn = true;

  render() {
    return (
 <div>
      { !this.loggedIn //TODO sprawdzanie logowania - NIEzalogowany
      &&
      <h1>Log in to see this page</h1> 
       }
      { this.loggedIn //TODO sprawdzanie logowania - zalogowany
      &&
        <h1></h1>
       }
        </div>
        
    );
  }
}
