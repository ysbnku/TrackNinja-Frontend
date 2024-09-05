import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';

const LogList: React.FC<Logs> = () => {
    const [logs, setLogs] = useState<Logs>();
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('Log list error');
  
    const params = useParams();
  
    let content;

  useEffect(() => {
    axios
      .get('https://trackninja-backend-52c9c95cd779.herokuapp.com/api/logs')
      .then((res: AxiosResponse) => {
        console.log("Send request")
        return res.data;
      })
      .then((logs: Logs) => {
        console.log("I am here")

        setLogs(logs);

      })
      .catch((err: AxiosError | Error) => {
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      });
  }, []);
  
  content = (
    <>
<DataTable value={logs?.data} paginator rows={13} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="User Id" style={{ width: '15%' }}></Column>
    <Column field="date" header="Date" style={{ width: '15%' }}></Column>
    <Column field="appName" header="Application Name" style={{ width: '25%' }}></Column>
    <Column field="appDuration" header="Duration" style={{ width: '15%' }}></Column>
</DataTable>
    </>
);
  
    if (isError) {
      content = (
        <ErrorComponent errorMessage={errorMessage}></ErrorComponent>
      );
    }
  
    return content;
  };
  
  export default LogList;
  