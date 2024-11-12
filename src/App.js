import React from 'react';
import AppRouter from './routers/AppRouter';
import { AuthProvider } from './auth/AuthProvider'; // Asegúrate de usar la importación correcta
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import './firebase'; // Asegúrate de que la ruta a 'firebase.js' esté correcta

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
