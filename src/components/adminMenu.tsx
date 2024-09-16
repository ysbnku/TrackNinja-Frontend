import React from "react";
import { Menubar } from 'primereact/menubar';

const AdminMenu = () => {
    const start = (
        <>
            <img src="/images/logo.png" height="30" className="p-mr-2" />
        </>
    );

    const header = (
        <div className="flex align-items-center ">
            <img src="/images/user3.jpg" height="30" className="p-1" />
            <span>Welcome, </span>
            <span>Yavuz Selim Bitmez</span>
        </div>
    );
    return (
        <Menubar start={start} end={header} />
    );
}
export default AdminMenu;