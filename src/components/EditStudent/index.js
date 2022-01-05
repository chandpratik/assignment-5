import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useStudentsContext } from '../../context';
import './EditStudent.css';

const EditStudent = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { studentsData, setStudentsData } = useStudentsContext();
  const [data, setData] = useState({
    name: studentsData[id].name,
    age: studentsData[id].age,
    course: studentsData[id].course,
    batch: studentsData[id].batch,
  });
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    studentsData[id].name = data.name;
    studentsData[id].age = data.age;
    studentsData[id].course = data.course;
    studentsData[id].batch = data.batch;
    setStudentsData(studentsData);
    navigate('/students');
  };

  return (
    <>
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
            <button type='submit' className='update-btn'>
              Update
            </button>
          </div>
          <div>
            <button className='back-btn'>Go Back</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditStudent;
