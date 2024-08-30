import React from 'react';
import ApiService from '../../service/ApiService';
import { NavLink, useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate(); // Ensure useNavigate is used correctly
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Pranav Hotel</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to="/rooms" className={({ isActive }) => (isActive ? 'active' : '')}>Rooms</NavLink></li>
                <li><NavLink to="/find-booking" className={({ isActive }) => (isActive ? 'active' : '')}>Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>Admin</NavLink></li>}

                {!isAuthenticated && <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></li>}
                {!isAuthenticated && <li><NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
            </ul>
        </nav>
    );
}
