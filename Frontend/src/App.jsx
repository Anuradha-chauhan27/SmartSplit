import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';
import Income from './pages/Dashboard/Income';
import Login from './pages/Auth/login';
import { Navigate } from 'react-router-dom';
import SignUp from './pages/Auth/signup';
import UserProvider from './context/userContext';
const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/income" exact element={<Income />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem('token'); 
  return isAuthenticated ? (
  <Navigate to="/dashboard" /> 
):(
   <Navigate to="/login" />
  );
}