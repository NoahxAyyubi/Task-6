import React from 'react';
import studentsData from '../data/students.json';
import coursesData from '../data/courses.json';
import './StudentList.css'

const StudentList = () => {
  const getCourseName = (courseId) => {
    const course = coursesData.find((course) => course.id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  return (
    <div className="student-list">
      <h2 style={{ borderBottom: '3px solid #000', paddingBottom: '10px' }}>Student List </h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id} className="student-item">
            <strong>Name:</strong> {student.name},{' '}
            <strong>Age:</strong> {student.age}
            <ul className="enrolled-courses" >
              <strong>Enrolled courses:</strong>
              {student.courses.map((courseId) => (
                <li key={courseId}>{getCourseName(courseId)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
