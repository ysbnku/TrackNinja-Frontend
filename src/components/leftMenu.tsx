import React from 'react';
import { Menu } from 'primereact/menu';

const LeftMenu = () => {
    let items = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie', command: () => window.open('/admin', '_self')},
        { label: 'Users', icon: 'pi pi-fw pi-user', command: () => window.open('/admin/usersettings', '_self')},
        { label: 'Logs', icon: 'pi pi-fw pi-download', command: () => window.open('/admin/userloglist', '_self')},
        { label: 'Filter', icon: 'pi pi-fw pi-filter' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog'},
        { label: 'License', icon: 'pi pi-fw pi-id-card', command: () => window.open('/admin/license', '_self')},
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
