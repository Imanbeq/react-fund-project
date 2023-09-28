import { useState, useEffect } from 'react';

export default function Dictionary() {
  const [word, setWord] = useState('Help');

  useEffect(() => {
    console.log('State Updated', word);
  });

  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definiton for {word}</h1>
    </>
  );
}
