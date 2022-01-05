import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStudentsContext } from '../../context';
import './Students.css';

const Students = () => {
  const { studentsData } = useStudentsContext();
  let navigate = useNavigate();

  return (
    <div className='students-page-container'>
      <div className='student-details-header'>
        <div>Students Details</div>
        <div>
          <button
            className='add-student-btn'
            onClick={() => {
              navigate('add');
            }}
          >
            Add new student
          </button>
        </div>
      </div>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, idx) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.batch}</td>
                <td>
                  <Link to={`edit/${idx}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
