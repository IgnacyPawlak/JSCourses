import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <center>
          <h1>Welcome, weary traveler!</h1>
          </center>
        <br />
        <p className='text-weight-light text-justify'>Studdier is here to help you sign up for interesting courses and to let you access what you've learnt after the classes are over. Log in or register to see our courses!</p>
        <center><img className='home-image' src="https://www.creativefabrica.com/wp-content/uploads/2020/01/27/Set-of-Highschool-Student-Cartoon-Graphics-1.jpg" alt="Let's study together"/></center>
      </div>
    );
  }
}
