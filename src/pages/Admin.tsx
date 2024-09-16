import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';
function didTappedLogin() {
  window.open('/register', '_self')
}

let items = [
  { label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie' },
  { label: 'Users', icon: 'pi pi-fw pi-user' },
  { label: 'Logs', icon: 'pi pi-fw pi-download' },
  { label: 'Filter', icon: 'pi pi-fw pi-filter' },
  { label: 'Log Out', icon: 'pi pi-fw pi-sign-out' }
];

const Admin = () => {
  return (
    <>
      <AdminMenu />
      <div className="grid h-screen">
        <LeftMenu />
        <div className="col">
          <div className="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
        </div>
        <div className="col">
          <div className="text-center p-3 border-round-sm bg-primary font-bold ">3</div>
        </div>
      </div>
    </>
  );
}

export default Admin;