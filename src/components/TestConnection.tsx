import React from 'react';

const TestConnection: React.FC = () => {
  const testConnection = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books`);
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