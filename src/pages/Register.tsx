import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const Register = () => {
  return (
    <>

<div className="flex align-items-center justify-content-center mt-8">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <img src="/images/logo.png" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Register your account</div>
        </div>
        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

            <Button label="Register" icon="pi pi-user" className="w-full" />
        </div>
    </div>
</div>
    </>
  );
}

export default Register;