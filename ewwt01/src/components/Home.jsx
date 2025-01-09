import React from 'react';

function Home() {
  const nickname = "User's Nickname"; // Replace with actual nickname from context or state

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#000' }}>
      <h1 style={{ color: '#fff' }}>Welcome, {nickname}!</h1>
    </div>
  );
}

export default Home; 