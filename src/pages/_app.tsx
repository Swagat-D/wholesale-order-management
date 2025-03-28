import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { OfflineProvider } from '../context/OfflineContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OfflineProvider>
          <Component {...pageProps} />
        </OfflineProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}