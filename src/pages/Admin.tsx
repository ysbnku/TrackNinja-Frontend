import React, { useEffect, useState } from 'react';

import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';
import AdminLoading from '../components/adminLoading';
import UserList from './UserSettings';
import License from '../pages/License';


const Admin = () => {
  if (!localStorage.getItem('sessionKey')) {
    window.open('/login', '_self');
    return null;
  } else {
    return (
      <>
        <AdminMenu />
        <div className="grid">
          <LeftMenu />
          <div className="col">
          </div>
        </div>
      </>
    );
  }
}

export default Admin;