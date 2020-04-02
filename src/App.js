import React from 'react';
import Login from './components/auth/Login';
import SignIn from './components/auth/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <SignIn/>
    </div>
  );
}

export default App;
