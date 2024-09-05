import React, { useEffect, useState } from 'react';
import { Logs } from '../models/logs.model';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';

function didTappedLogin() {
  window.open('/register', '_self')
}

const Panel = () => {
  return (
    <>

    </>
  );
}

export default Panel;