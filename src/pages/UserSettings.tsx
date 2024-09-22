import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL } from '../constants';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';

const UserSettings: React.FC = () => {

	let [state, setState] = useState({ loading: false, data: [] });

	const onRowEditComplete = (e: any) => {
		updateUser(e.newData)
	};

	const statusEditor = (options: any) => {
		return <Checkbox checked={options.value} onChange={(e) => options.editorCallback(e.checked)} />;
	};

	const isIconVisibleBody = (options: any) => {
		return <Checkbox checked={options.isIconVisible} onChange={() => { }} />;
	};

	const isMenuVisibleBody = (options: any) => {
		return <Checkbox checked={options.isMenuVisible} onChange={() => { }} />;
	};

	const isSendTabBody = (options: any) => {
		return <Checkbox checked={options.isSendTab} onChange={() => { }} />;
	};

	const isApprovedBody = (options: any) => { return <Checkbox checked={options.isApproved} /> };

	const textEditor = (options: any) => {
		return <InputText type="text" className="p-inputtext-sm w-11" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
	};

	const numberEditor = (options: any) => {
		return <InputText type="text" className="p-inputtext-sm w-10" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		await axios.get(BASEURL + '/users/' + localStorage.getItem('accountCode'))
			.then(response => {
				setState({ loading: false, data: response.data.data })
			})
			.catch(error => {
				setState({ loading: true, data: [] })
				console.error("Api request error:  ", error);
			});
	}

	async function updateUser(e: any) {
		console.log(e)
		await axios.post(BASEURL + '/updateUserSettings', {
			id: e.id,
			name: e.name,
			surname: e.surname,
			inactivityTime: e.inactivityTime == 0 ? 60 : Number(e.inactivityTime),
			isApproved: e.isApproved,
			isIconVisible: e.isIconVisible,
			isMenuVisible: e.isMenuVisible,
			isSendTab: e.isSendTab,
		})
			.then(response => {
				window.location.reload();
			})
			.catch(error => {
				console.error("Api request error:  ", error);
			});
	}

	return (
		<>
			<AdminMenu />
			<div className="grid h-screen">
				<LeftMenu />
				<div className="col">
					<DataTable value={state.data} dataKey="id" editMode="row" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
						<Column field="pcname" header="PC Name" ></Column>
						<Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '35%' }}></Column>
						<Column field="surname" header="Surname" editor={(options) => textEditor(options)} style={{ width: '30%' }}></Column>
						<Column field="inactivityTime" header="Inactivity Time" editor={(options) => numberEditor(options)} style={{ width: '5%' }}></Column>
						<Column field="isSendTab" header="Send Tab" body={isSendTabBody} editor={(options) => statusEditor(options)} style={{ width: '5%' }}></Column>
						<Column field="isMenuVisible" header="Menu Visibility" body={isMenuVisibleBody} editor={(options) => statusEditor(options)} style={{ width: '5%' }}></Column>
						<Column field="isIconVisible" header="Icon Visibility" body={isIconVisibleBody} editor={(options) => statusEditor(options)} style={{ width: '5%' }}></Column>
						<Column field="isApproved" header="Approval" body={isApprovedBody} editor={(options) => statusEditor(options)} style={{ width: '5%' }}></Column>
						<Column rowEditor={true} headerStyle={{ width: '10%' }} bodyStyle={{ textAlign: 'center' }}></Column>

					</DataTable>
				</div>
			</div>

		</>
	);
};

export default UserSettings;


