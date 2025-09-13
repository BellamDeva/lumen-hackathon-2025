import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Plans from './pages/User/Plans';
import MySubscriptions from './pages/User/MySubscriptions';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PlanCard from './components/PlanCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/my-subscriptions" element={<MySubscriptions />} />
        <Route path="/plancard" element = {<PlanCard/>}/>
        <Route path="/admin/dashboard" element = {<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
