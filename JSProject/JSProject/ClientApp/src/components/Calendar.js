import React, { Component } from 'react';

export class Calendar extends Component {
  static displayName = Calendar.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  //TODO sprawdzanie zalogowania
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
