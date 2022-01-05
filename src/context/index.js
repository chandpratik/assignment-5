import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

const StudentsContext = createContext();

export function StudentContextProvider({ children }) {
  const initialState = [
    {
      id: nanoid(6),
      name: 'Pratik',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Rohit',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Jagdish',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Rohan',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Abhishek',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Tushar',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Atharva',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Yash',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
    {
      id: nanoid(6),
      name: 'Ashish',
      age: 22,
      course: 'MERN',
      batch: 'October',
    },
  ];

  const [studentsData, setStudentsData] = useState(initialState);

  const value = { studentsData, setStudentsData };
  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudentsContext() {
  return useContext(StudentsContext);
}
