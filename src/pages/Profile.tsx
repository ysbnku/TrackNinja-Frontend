import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';
import { InputText } from 'primereact/inputtext';
import { BASEURL } from '../constants';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dropdown } from 'primereact/dropdown';

const Profile = () => {
  let [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    bindingid: "",
    password: "",
    license: ""
  });

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [license, setLicense] = useState('');
  const licensePlans = ["Basic","Premium","Enterprise"];

  useEffect(() => {
    fetchUserInformation();
  },[]);

  if (!localStorage.getItem('sessionKey')) {
    window.open('/login', '_self');
    return null;
  } else {
    return (
      <>
        <AdminMenu />
        <div className="grid h-screen">
          <LeftMenu />
          <div className="col">
            <div>
              <label htmlFor="name" className="text-900 font-medium mb-2">Name</label>
              <InputText id="name" placeholder={state.name} type="text" className="w-full mb-3 p-inputtext-sm" onChange={(e) => setName(e.target.value)} />

              <label htmlFor="surname" className="block text-900 font-medium mb-2">Surname</label>
              <InputText type="text" placeholder={state.surname} className="w-full mb-3 p-inputtext-sm" onChange={(e) => setSurname(e.target.value)} />

              <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
              <InputText disabled id="email" type="text" placeholder={state.email} className="w-full mb-3 p-inputtext-sm" onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="bindingid" className="block text-900 font-medium mb-2">Binding ID</label>
              <InputText disabled type="text" placeholder={state.bindingid} className="w-full mb-3 p-inputtext-sm" />

              <label htmlFor="license" className="block text-900 font-medium mb-2">Select a Plan</label>
              <Dropdown value={license} placeholder={state.license} onChange={(e) => setLicense(e.value)} options={licensePlans} optionLabel="name" className="w-full mb-3" checkmark={true} highlightOnSelect={false} />

              <label htmlFor="password" className="block text-900 font-medium mb-2">Change Password</label>
              <InputText invalid = { oldPassword != state.password && oldPassword != "" } type="password" placeholder="Old password" className="w-full mb-3 p-inputtext-sm" onChange={(e) => setOldPassword(e.target.value)} />
              <InputText type="password" placeholder="New password" className="w-full mb-3 p-inputtext-sm" onChange={(e) => setNewPassword(e.target.value)} />

              <Button label="Save" icon="pi pi-save" className="w-full" onClick={didTappedSaveButton} />
            </div>
          </div>
          <div className="col-1">
          </div>
        </div>
      </>
    );
  }

  async function didTappedSaveButton() {
    if (name != "" || surname != "" || oldPassword != "" || license != "") {
      console.log(oldPassword)
      console.log(state.password)
      if (oldPassword != "" && oldPassword != state.password) {
        return
      }
      await axios.post(BASEURL + '/updateAdminInformations',
        {
        id: Number(localStorage.getItem('accountCode')),
        name: (name == "") ? state.name : name,
        surname: (surname == "") ? state.surname : surname,
        password: (oldPassword == state.password) ? newPassword : state.password,
        license : (license == "") ? state.license : license
      })
        .then(response => {
          const { message } = response.data;
          if (message === "Success") {
            localStorage.setItem('license', license);
            window.location.reload();
          }
        })
        .catch(error => {
          console.error("Api request error:  ", error);
        });
    }
  }

  async function fetchUserInformation() {
    await axios.get(BASEURL + '/getAdminInformation/'+ localStorage.getItem('accountCode'))
      .then(response => {

        setState({
          name: response.data.admin.name,
          surname: response.data.admin.surname,
          email: response.data.admin.email,
          bindingid: response.data.admin.bindingID,
          password: response.data.admin.password,
          license: response.data.admin.license,
        });

      })
      .catch(error => {
        console.error("Api request error:  ", error);
      });
  }
}

export default Profile;