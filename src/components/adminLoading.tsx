import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const AdminLoading = () => {

  return (
    <>
      <div className="flex justify-content-center align-items-center h-screen">
        <ProgressSpinner />
      </div>
    </>
  );
}
export default AdminLoading;
