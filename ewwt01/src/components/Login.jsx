import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // 로그인 로직 구현
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
    });

    if (response.ok) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#000' }}>
      <img src="/logo.png" alt="Logo" style={{ marginBottom: '20px' }} />
      <input type="text" placeholder="아이디를 입력하세요" value={id} onChange={(e) => setId(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <button onClick={handleLogin} style={{ padding: '10px 20px', margin: '10px', width: '320px', backgroundColor: '#b3e5fc', border: 'none', borderRadius: '5px' }}>로그인</button>
      <button onClick={() => navigate('/register')} style={{ padding: '10px 20px', margin: '10px', width: '320px', backgroundColor: '#b3e5fc', border: 'none', borderRadius: '5px' }}>회원가입하기</button>
    </div>
  );
}

export default Login;