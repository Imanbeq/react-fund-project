import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';
import DefinitonSearch from '../components/DefinitionSearch';

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate('/login');
        } else if (response.status === 500) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data[0] && data[0].meanings) {
          setWord(data[0].meanings);
        } else {
          setNotFound(true);
        }
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to='/dictionary'>Search another</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again?</p>
        <Link to='/dictionary'>Search another</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again!</p>
          <DefinitonSearch />
        </>
      ) : null}
    </>
  );
}
