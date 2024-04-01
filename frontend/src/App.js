import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Page from './components/Page';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route 
          path="/dashboard/*"
          element={<Dashboard />}
        >
          <Route path="Customer" element={<Page />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </div>
  );
};

export default App;
