import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import UserSettings from './pages/UserSettings';
import License from './pages/License';
import UserLogList from './pages/UserLogList';

function App() {
  let routes = (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="admin/usersettings" element={<UserSettings />} />
      <Route path="admin/userloglist" element={<UserLogList />} />
      <Route path="admin/license" element={<License />} />
      <Route path="admin" element={<Admin />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
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
