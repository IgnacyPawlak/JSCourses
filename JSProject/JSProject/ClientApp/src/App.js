import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Calendar } from './components/Calendar';
import { Payments } from './components/Payments';
import { StudentCourses } from './components/StudentCourses';
import { TeacherCourses } from './components/TeacherCourses';
import { AllCourses } from './components/AllCourses';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/payments' component={Payments} />
        <Route path='/student-courses' component={StudentCourses} />
        <Route path='/teacher-courses' component={TeacherCourses} />
        <Route path='/all-courses' component={AllCourses} />

        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
