import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL } from '../constants';
import AdminLoading from '../components/adminLoading';

const LogList: React.FC = () => {
	let [state, setState] = useState({
		loading: true,
		logs: []
	});

	useEffect(() => {
		fetchUserLogs();
	}, []);

	async function fetchUserLogs() {
		await axios.get(BASEURL + '/logs')
			.then(response => {
				setState({ ...state, loading: true, logs: response.data });
			})
			.catch(error => {
				console.error("API çağrısı sırasında hata oluştu: ", error);
			});
	}

	return (
		<>
			{state.loading
				? (AdminLoading())
				: (<DataTable value={state.logs} paginator rows={13} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
					<Column field="id" header="User Id" style={{ width: '15%' }}></Column>
					<Column field="date" header="Date" style={{ width: '15%' }}></Column>
					<Column field="appName" header="Application Name" style={{ width: '25%' }}></Column>
					<Column field="appDuration" header="Duration" style={{ width: '15%' }}></Column>
				</DataTable>)
			}
		</>
	);
};

export default LogList;
