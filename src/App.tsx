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
import LogList from './pages/LogList';


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

  let routes = (
    <Routes>
           
      <Route path="/logs" element={<LogList data={[]} />} />
      </Routes>
  );
  
  return (
    <BrowserRouter basename="/admin">
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );

  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }
}

export default App;
