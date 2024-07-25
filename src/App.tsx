import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

///AXIOS
import axios, { AxiosError, AxiosResponse } from 'axios';
///MODELS
import { Client } from './models/client.model';
import { Logs } from './models/logs.model';
import { log } from 'console';


function App() {
  const [logs, setLogs] = useState<Logs>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        <div>
          <h1> Welcome to TrackNinja </h1>
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

          <MyButton />
        </div>
      </header>
    </div>
  );

  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }
}

export default App;
