import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';
import { BreadCrumb } from 'primereact/breadcrumb';


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
            <div className="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
          </div>
       
        </div>
      </>
    );
  }
}

export default Admin;