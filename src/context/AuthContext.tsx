import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email: string, password: string, rememberMe: boolean) => {
    // Mock login
    if (email === 'admin@example.com' && password === 'password') {
      setUser({ email });
      if (rememberMe) localStorage.setItem('user', JSON.stringify({ email }));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);