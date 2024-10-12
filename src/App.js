// src/App.js
import React from 'react';
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import './Firebase/firebaseConfig'; // Importa y ejecuta tu configuración de Firebase

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
