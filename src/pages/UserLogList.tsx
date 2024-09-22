import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BASEURL } from '../constants';
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

const UserLogList: React.FC = () => {
	let [state, setState] = useState({ loading: false, logs: [] });

	const [filters, setFilters] = useState({
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
		surname: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        pcname: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        appName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },

    });

	useEffect(() => {
		fetchUserLogs();
	}, []);

	async function fetchUserLogs() {
		await axios.get(BASEURL + '/logs/' + localStorage.getItem('accountCode'))
			.then(response => {
				setState({loading: true, logs: response.data.logs});
			})
			.catch(error => {
				console.error("API çağrısı sırasında hata oluştu: ", error);
			});
	}

	return (
		<>
			<AdminMenu />
			<div className="grid h-screen">
				<LeftMenu />
				<div className="col">
					<DataTable value={state.logs} dataKey="id" paginator rows={10} filters={filters} 
					emptyMessage="No data found." filterDisplay="row" tableStyle={{ minWidth: '50rem' }}>
						<Column field="name" header="Name" filterField="name" filter filterPlaceholder="Filter" style={{ width: '20%' }}></Column>
						<Column field="surname" header="Surname" filterField="surname" filter filterPlaceholder="Filter" style={{ width: '20%' }}></Column>
						<Column field="pcname" header="PC Name" filterField="pcname" filter filterPlaceholder="Filter" style={{ width: '20%' }}></Column>
						<Column field="appName" header="App Name" filterField="appName" filter filterPlaceholder="Filter" style={{ width: '20%' }}></Column>
						<Column field="tabName" header="Tab Name" style={{ width: '20%' }}></Column>
						<Column field="logDate" header="Log Date" style={{ width: '20%' }}></Column>
						<Column field="timeSpent" header="Time Spent" style={{ width: '20%' }}></Column>

					</DataTable>
				</div>
			</div>

		</>
	);
};

export default UserLogList;
