import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useStore } from '../store';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { classNames } from '../utils/helpers'; 

interface LoginFormProps {
  onLoginSuccess?: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const { email, password, isLoading, error, setEmail, setPassword, setIsLoading, setError } = useStore();
  const { data: session, status } = useSession();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      await signIn('credentials', { email, password });
      onLoginSuccess && onLoginSuccess(); // Notify parent component of successful login
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p> 
      )}

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit" disabled={isLoading} className="mt-4">
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;