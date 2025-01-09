import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', {
        id,
        password,
        nickname,
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#000' }}>
      <img src="/logo.png" alt="Logo" style={{ marginBottom: '20px' }} />
      <input type="text" placeholder="아이디를 입력하세요" value={id} onChange={(e) => setId(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <input type="password" placeholder="비밀번호를 다시 입력하세요" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <input type="text" placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} style={{ margin: '10px', padding: '10px', width: '300px' }} />
      <button onClick={handleRegister} style={{ padding: '10px 20px', margin: '10px', width: '320px', backgroundColor: '#b3e5fc', border: 'none', borderRadius: '5px' }}>회원가입</button>
    </div>
  );
}

export default Register;