import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { PanelMenu } from 'primereact/panelmenu';
import { Menubar } from 'primereact/menubar';

function didTappedLogin() {
  window.open('/register', '_self')
}

const header = (
  <div className="flex flex-column align-items-center">
      <img src="/images/logo.png" alt="Ninja Icon" style={{ width: '120px', margin: '10px' }} />
      <span>Welcome, <br></br>Yavuz Selim Bitmez</span>
  </div>
);

let items = [
  {label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie'},
  {label: 'Users', icon: 'pi pi-fw pi-user'},
  {label: 'Logs', icon: 'pi pi-fw pi-download'},
  {label: 'Filter', icon: 'pi pi-fw pi-filter'},

  {separator: true},
  {label: 'Settings', icon: 'pi pi-fw pi-cog'}


];

const Admin = () => {
  return (
    <>

<div className="grid">
    <div className="col-2">
    <Panel header = {header} className="w-full"  />
    <PanelMenu model={items} className="w-full"  />

    </div>
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