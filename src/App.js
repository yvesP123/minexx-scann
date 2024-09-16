import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExportPage from './components/Exportpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/export/:id" element={<ExportPage />} />
      </Routes>
    </Router>
  );
};

export default App;
