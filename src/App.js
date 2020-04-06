import React from 'react';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth'
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </AuthProvider>
  );
}

export default App;
