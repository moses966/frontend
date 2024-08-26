import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetString() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get-string')
      .then(response => {
        if (response.data.result) {
          setResult(response.data.result);
        } else if (response.data.error) {
          setError(response.data.error);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the string:', error);
        setError('An unexpected error occurred.');
      });
  }, []);

  return (
    <div>
      <h1>Contract String</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
}

export default GetString;
