import React, { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import { v4 as uuid4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: 'Caleb',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'Adam',
      role: 'Security',
      img: 'https://images.pexels.com/photos/5514883/pexels-photo-5514883.jpeg',
    },
    {
      name: 'Susan',
      role: 'Nurse',
      img: 'https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg',
    },
    {
      name: 'Becky',
      role: 'Cook',
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      name: 'John',
      role: 'Driver',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      name: 'Brian',
      role: 'Pilot',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
  ]);
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap'>
            {employees.map((empl) => {
              console.log(uuid4());
              return (
                <Employee
                  key={uuid4()}
                  name={empl.name}
                  role={empl.role}
                  img={empl.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
