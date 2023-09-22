import React, { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Caleb',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      id: 2,
      name: 'Adam',
      role: 'Security',
      img: 'https://images.pexels.com/photos/5514883/pexels-photo-5514883.jpeg',
    },
    {
      id: 3,
      name: 'Susan',
      role: 'Nurse',
      img: 'https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg',
    },
    {
      id: 4,
      name: 'Becky',
      role: 'Cook',
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      id: 5,
      name: 'John',
      role: 'Driver',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: 6,
      name: 'Brian',
      role: 'Pilot',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((empl) => {
      if (id === empl.id) {
        return { ...empl, name: newName, role: newRole };
      }
      return empl;
    });

    setEmployees(updatedEmployees);
  }

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
              return (
                <Employee
                  key={empl.id}
                  id={empl.id}
                  name={empl.name}
                  role={empl.role}
                  img={empl.img}
                  updateEmployee={updateEmployee}
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
