import React from 'react';
import { Menu } from 'primereact/menu';

const LeftMenu = () => {
    let items = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie', command: () => window.open('/admin', '_self')},
        { label: 'Users', icon: 'pi pi-fw pi-user' },
        { label: 'Logs', icon: 'pi pi-fw pi-download' },
        { label: 'Filter', icon: 'pi pi-fw pi-filter' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        { label: 'License', icon: 'pi pi-fw pi-id-card' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Log Out', icon: 'pi pi-fw pi-sign-out', command: () => onClickLogOut() }
    ];

    function onClickLogOut() {
        localStorage.removeItem('sessionKey');
        window.open('/login', '_self')
    }
    return (
        <Menu className="col-2 " model={items} />
    );
}



export default LeftMenu;
