import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import MainWrapper from '../components/layout/MainWrapper';
import axios, { AxiosError, AxiosResponse } from 'axios';

const LogList: React.FC<Logs> = () => {
    const [logs, setLogs] = useState<Logs>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
        setIsLoading(false);
        //   console.log(logs.data[2].appName);

      })
      .catch((err: AxiosError | Error) => {
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      });
  }, []);
  
  content = (

    <table>
    <th>id</th>
    <th>User Id</th>
    <th>Date</th>
    <th>User Name</th>
    <th>Application Name</th>
    <th>Duration</th>
    <th>Time Spent</th>
    {logs?.data.map(log => (
      <tr>
        <td>{log.id}</td>
        <td>{log.id}</td>
        <td>{log.date}</td>
        <td>yavuz.bitmez</td>
        <td>{log.appName}</td>
        <td>{log.appDuration}</td>
        <td>{log.timeSpent}</td>
      </tr>

    ))}
  </table>  
);
  
    if (isError) {
      content = (
        <ErrorComponent errorMessage={errorMessage}></ErrorComponent>
      );
    }
  
    return content;
  };
  
  export default LogList;
  