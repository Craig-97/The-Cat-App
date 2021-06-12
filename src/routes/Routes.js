import React from 'react';
import { Homepage } from '../pages/Homepage';
import { Upload } from '../pages/Upload';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
};
