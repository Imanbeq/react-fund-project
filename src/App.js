import React, { useState } from 'react';
import './index.css';
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
          <div className='flex flex-wrap'>
            <Employee
              name='Caleb'
              role='intern'
              img='https://black-pearl-storage.storage.yandexcloud.net/public/images/0ivvwt6MxwfNvLMuL8b0wlbVKW5VxMWu4hOiW90a.jpg'
            />
            <Employee
              name='Adam'
              role='security'
              img='https://black-pearl-storage.storage.yandexcloud.net/public/images/0ivvwt6MxwfNvLMuL8b0wlbVKW5VxMWu4hOiW90a.jpg'
            />
            <Employee
              name='Susan'
              role={role}
              img='https://black-pearl-storage.storage.yandexcloud.net/public/images/0ivvwt6MxwfNvLMuL8b0wlbVKW5VxMWu4hOiW90a.jpg'
            />
            <Employee
              name='Becky'
              img='https://black-pearl-storage.storage.yandexcloud.net/public/images/0ivvwt6MxwfNvLMuL8b0wlbVKW5VxMWu4hOiW90a.jpg'
            />
          </div>
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
