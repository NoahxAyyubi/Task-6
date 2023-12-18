import coursesData from '../data/courses.json';
import React from 'react';

const CourseList = () => {
    return (
      <div className="student-list">
        <h2 style={{ borderBottom: '3px solid #000', paddingBottom: '10px' }}>Course List </h2>
        <ul>
          {coursesData.map((course) => (
            <li key={course.id} className="student-item">
              <strong>Course Name:</strong> {course.name},{' '}
              <strong>Instructor:</strong> {course.instructor}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CourseList;