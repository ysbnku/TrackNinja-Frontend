import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL } from '../constants';

const UserList: React.FC = () => {
	let [state, setState] = useState({
		loading: false,
		logs: [],
		errorMessage: null
	});

	useEffect(() => {
		fetchUserLogs();
	}, []);

	async function fetchUserLogs() {
	    await axios.get(BASEURL + '/login')
			.then(response => {
			  const { message, sessionKey, accountCode } = response.data;
			  if (message === "Success") {
				console.log("Login successful, sessionKey:", sessionKey);
				localStorage.setItem('accountCode', accountCode);
				localStorage.setItem('sessionKey', sessionKey);
				window.open('/admin', '_self');
			  } else {
				console.error("Login failed, unexpected message:", message);
			  }
			})
			.catch(error => {
			  console.error("Api request error:  ", error);
			});
	}

	return (
		<>
			<DataTable value={state.logs} paginator rows={13} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
				<Column field="id" header="User Id" style={{ width: '15%' }}></Column>
				<Column field="date" header="Date" style={{ width: '15%' }}></Column>
				<Column field="appName" header="Application Name" style={{ width: '25%' }}></Column>
				<Column field="appDuration" header="Duration" style={{ width: '15%' }}></Column>
			</DataTable>
		</>
	);
};

export default UserList;
