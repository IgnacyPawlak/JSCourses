import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  //info dla niewtajemniczonych: są frontowe obejścia do podstron, jak będzie wam się nudzić to możecie zrobić zabezpieczenia backowe
//TODO: coś się kopło z logowaniem jak pisałam na msg, sprawdźcie proszę :)

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      //TODO delete hardcode
      role: 'student'
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    const studentCoursesNavItem =
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/student-courses">
          My Courses
        </NavLink>
      </NavItem>
      ;
      const teacherCoursesNavItem =
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/teacher-courses">
          My Classes
        </NavLink>
      </NavItem>
      ;
      const adminCoursesNavItem =
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/admin-courses">
          Courses
        </NavLink>
      </NavItem>
      ;
      
    const paymentsNavItem =
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/payments">
          Payments
        </NavLink>
      </NavItem>
      ;
    const calendarNavItem =
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/calendar">
          Calendar
        </NavLink>
      </NavItem>
      ;
    let menuNavItems;
    if (this.state.role == 'student') {
      menuNavItems =
        <span className='d-flex'>
          {studentCoursesNavItem}
          {calendarNavItem}
          {paymentsNavItem}
        </span>
        ;
    }
    else if (this.state.role == 'teacher') {
      //TODO add teacherCourses, addCourseMaterials
      menuNavItems =
        <span className='d-flex'>
          {teacherCoursesNavItem}
          {calendarNavItem}
        </span>
        ;
    }
    else if (this.state.role == 'admin') {
      //TODO add allPayments?, addCourse
      menuNavItems =
        <span className='d-flex'>
          {adminCoursesNavItem}
          {calendarNavItem}
        </span>
        ;
    }

    return (

      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Studdier</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">

                {menuNavItems}

                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
