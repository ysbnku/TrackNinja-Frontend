import React from 'react';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

///AXIOS
import axios, { AxiosError, AxiosResponse } from 'axios';
///MODELS
import { Logs } from './models/logs.model';
import LogList from './pages/LogList';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
import Register from './pages/Register';

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
      <Route path="" element={<Home/>} />
      <Route path="admin/logs" element={<LogList data={[]} />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
  );
  
  return (
      <BrowserRouter basename="/">
        <div>
       <Layout>{routes}</Layout>
        </div>
      </BrowserRouter>
    );
}

export default App;
