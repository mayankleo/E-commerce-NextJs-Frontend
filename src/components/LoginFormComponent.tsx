import { useState } from 'react';
import axios from 'axios';
import { ButtonComponent } from '@/components';

const LoginForm = () => {
  const [username, setUsername] = useState('leo');
  const [password, setPassword] = useState('leo');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      }, {
        withCredentials: true,
      });

      const { access, refresh } = response.data;

      document.cookie = `accessToken=${access}; path=/; secure; httponly; samesite=strict`;
      document.cookie = `accessToken=${refresh}; path=/; secure; httponly; samesite=strict`;

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <ButtonComponent type="submit">Login</ButtonComponent>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
