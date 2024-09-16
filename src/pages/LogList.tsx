import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LogsService } from '../services/LogsService';




const LogList: React.FC<Logs> = () => {
	let [state, setState] = useState({
		loading: false,
		logs: [],
		errorMessage: null
	});

	useEffect(() => {
		fetchUserLogs();
	}, []);

	async function fetchUserLogs() {
		let response = await LogsService.getLogs();
		setState({
			...state,
			loading: false,
			logs: response.data
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

export default LogList;
