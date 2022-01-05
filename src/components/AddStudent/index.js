import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentsContext } from '../../context';
import { nanoid } from 'nanoid';

import './AddStudent.css';

export const AddStudent = () => {
  const { studentsData, setStudentsData } = useStudentsContext();
  const [data, setData] = useState({
    name: '',
    age: '',
    course: '',
    batch: '',
  });
  let navigate = useNavigate();

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newStudent = {
      id: nanoid(6),
      name: data.name,
      age: data.age,
      course: data.course,
      batch: data.batch,
    };
    studentsData.push(newStudent);
    setStudentsData(studentsData);
    navigate('/students');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <div className='input'>
            <label htmlFor='name'>Name</label>
            <input value={data.name} name='name' onChange={handleChange} />
          </div>
          <div className='input'>
            <label htmlFor='age'>Age</label>
            <input value={data.age} name='age' onChange={handleChange} />
          </div>
          <div className='input'>
            <label htmlFor='course'>Course</label>
            <input value={data.course} name='course' onChange={handleChange} />
          </div>
          <div className='input'>
            <label htmlFor='batch'>Batch</label>
            <input value={data.batch} name='batch' onChange={handleChange} />
          </div>
        </div>
        <div className='btn-container'>
          <div>
            <button type='submit' className='add-btn'>
              Add
            </button>
          </div>
          <div>
            <button
              className='back-btn'
              onClick={() => {
                navigate('/students');
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
