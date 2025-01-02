import React from 'react';

const TestConnection = () => {
  const testConnection = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`);
      const data = await response.json();
      console.log('Backend response:', data);
    } catch (error) {
      console.error('Error connecting to backend:', error);
    }
  };

  return (
    <div>
      <button onClick={testConnection}>Test Backend Connection</button>
    </div>
  );
};

export default TestConnection;