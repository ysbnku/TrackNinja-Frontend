import React from "react";
import { Menubar } from 'primereact/menubar';
import { LOGO } from '../constants';

const AdminMenu = () => {
    const start = (
        <>
        <a href="/admin/userloglist">
        <img src={LOGO} height="30" className="p-mr-2"/>
        </a>
        </>
    );

    const header = (
        <div className="flex align-items-center ">
            <a href="/profile">
            <img src="/images/user3.jpg" height="30" className="p-1" />
            <span>Welcome, </span>
            <span>{localStorage.getItem('nameSurname')}</span>
            
            </a>
        </div>
    );
    return (
        <Menubar start={start} end={header} />
    );
}
export default AdminMenu;