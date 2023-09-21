import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <Employee name='Caleb' role='intern' />
          <Employee name='Adam' role='security' />
          <Employee name='Susan' role='nurse' />
          <Employee name='Becky' />
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
