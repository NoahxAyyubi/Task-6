import React from 'react';
import studentsData from '../data/students.json';
import coursesData from '../data/courses.json';

const StudentList = () => {
  const getCourseName = (courseId) => {
    const course = coursesData.find((course) => course.id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name},{' '}
            <strong>Age:</strong> {student.age}
            <ul>
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
