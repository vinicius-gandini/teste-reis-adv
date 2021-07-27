import React, { createContext, useCallback, useState, useContext } from 'react';
import { useEffect } from 'react';
import api from '../services/api';

interface User {
  name: string;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  userId: string;
  showAddPizza: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  setShowAddPizza: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<User>(() => {
    const user = localStorage.getItem('@Pizzayo:user');

    if (user) {
      return user;
    }

    return {} as User;
  });
  const [ userId, setUserId ] = useState('');
  const [showAddPizza, setShowAddPizza] = useState(false);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('sessions', {
      username,
      password,
    });

    const { id, name } = response.data.user;

    localStorage.setItem('@Pizzayo:user', name);

    setData(name);
    setUserId(id);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Pizzayo:user');

    setData({} as User);
    setUserId('');
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, userId, showAddPizza, setShowAddPizza, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };