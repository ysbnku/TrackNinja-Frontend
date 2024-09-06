import React from 'react';

import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

///AXIOS
import axios, { AxiosError, AxiosResponse } from 'axios';
///MODELS
import LogList from './pages/LogList';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
function App() {

  let routes = (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="admin/logs" element={<LogList data={[]} />} />
      <Route path="admin" element={<Admin />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );

  return (
    <BrowserRouter basename="/">
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
