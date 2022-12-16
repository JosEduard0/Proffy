import React from 'react';

import { BrowserRouter, Routes as RRoutes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RRoutes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </RRoutes>
    </BrowserRouter>
    );
};

export default Routes;