import React, { useState } from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name='Caleb' role='intern' />
          <Employee name='Adam' role='security' />
          <Employee name='Susan' role={role} />
          <Employee name='Becky' />
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
