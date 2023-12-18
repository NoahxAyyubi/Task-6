import coursesData from '../data/courses.json';
import React from 'react';

const CourseList = () => {
    return (
      <div>
        <h2>Course List</h2>
        <ul>
          {coursesData.map((course) => (
            <li key={course.id}>
              <strong>Course Name:</strong> {course.name},{' '}
              <strong>Instructor:</strong> {course.instructor}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CourseList;