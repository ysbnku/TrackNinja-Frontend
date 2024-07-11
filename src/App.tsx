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


function App() {
  const [logs, setLogs] = useState<Logs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://trackninja-backend-52c9c95cd779.herokuapp.com/api/logs')
      .then((res: AxiosResponse) => {
        return res.data.results;
      })
      .then((logs: Logs[]) => {

        setLogs(logs);
        setIsLoading(false);
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
          {logs.map(log => (
            <div key={log.id}>
              <p>{log.appName}</p>
              <p>{log.date}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
