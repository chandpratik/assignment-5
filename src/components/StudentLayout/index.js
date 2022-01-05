import React from 'react';
import { Outlet } from 'react-router-dom';

const StudentsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StudentsLayout;
