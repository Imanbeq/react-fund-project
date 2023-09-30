import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../components/NotFound';
import { baseUrl } from '../shared';

const Customer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  useEffect(() => {
    console.log('useEffect');
    const url = baseUrl + 'api/customers/' + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // navigate('/404');
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);

  return (
    <>
      {notFound ? <p>The customer with id {id} was not found</p> : null}

      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <button
        onClick={() => {
          const url = baseUrl + 'api/customers/' + id;
          fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json',
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Something went worng');
              }
              navigate('/customers');
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete
      </button>
      <br />
      <Link to='/customers'>Go Back</Link>
    </>
  );
};

export default Customer;
