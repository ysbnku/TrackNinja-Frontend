import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

import axios, { AxiosError, AxiosResponse } from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bindingid, setBindingid] = useState('');
    useEffect(() => {
        setBindingid("TN00112-TIMESTAMP");
    })

    return (
        <>
            <div className="flex align-items-center justify-content-center mt-8">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="/images/logo.png" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Register your account</div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
                        <InputText invalid={name == ''} id="name" type="text" placeholder="Name" className="w-full mb-3" onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="surname" className="block text-900 font-medium mb-2">Surname</label>
                        <InputText invalid={surname == ''} id="surname" type="text" placeholder="Surname" className="w-full mb-3" onChange={(e) => setSurname(e.target.value)} />

                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText invalid={email == ''} id="email" type="text" placeholder="Email address" className="w-full mb-3" onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText invalid={password == ''} id="password" type="password" placeholder="Password" className="w-full mb-3" onChange={(e) => setPassword(e.target.value)} />

                        <label htmlFor="bindingid" className="block text-900 font-medium mb-2">Binding ID</label>
                        <InputText id="bindingid" disabled type="text" placeholder={bindingid} className="w-full mb-3" />

                        <Button label="Register" icon="pi pi-user" className="w-full" onClick={didTappedRegister} />
                    </div>
                </div>
            </div>
        </>
    );

  
    async function didTappedRegister() {
        if (name == '' || surname == '' || email == '' || password == '') {
            
        } else {
            await axios.post('http://127.0.0.1:8086/api/register', {
                name: name,
                surname: surname,
                email: email,
                password: password,
                bindingid: bindingid
            })
                .then(response => {
                    const { message, sessionKey } = response.data;
                    if (message === "Success") {
                        console.log("register successful");
                    } else {
                        console.error("register failed, unexpected message:", message);
                    }
                })
                .catch(error => {
                    console.error("Api request error:  ", error);
                });
        }
    }
}

export default Register;