import React from 'react';
import './App.css';
import FormPage from './Pages/FormPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewProfileDetail from './Pages/ViewProfileDetail';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<FormPage />}></Route>
     <Route path="/viewprofile" element={<ViewProfileDetail />}></Route>
     </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
