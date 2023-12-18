

import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './StudentList';
import CourseList from './CourseList';

ReactDOM.render(
  <React.StrictMode>
     <div>
      <h1>Main Application</h1>
      <StudentList />
      <CourseList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
