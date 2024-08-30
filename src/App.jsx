import { useState } from 'react'

import './index.css'
import NavBar from './component/common/NavBar'
import Footer from './component/common/Footer'
import Home from './component/home/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AllRoomsPage from './component/booking_rooms/AllRoomsPage'
import FindBookingPage from './component/booking_rooms/FindBookingPage'
import RoomDetailsPage from './component/booking_rooms/RoomDetailsPage'
import LoginPage from './component/auth/LoginPage'
import RegisterPage from './component/auth/RegisterPage'
import EditProfilePage from './component/profile/EditProfilePage'
import ProfilePage from './component/profile/ProfilePage'
import ManageRoomPage from './component/admin/ManageRoomPage'
import ManageBookingsPage from './component/admin/ManageBookingsPage'
import AdminPage from './component/admin/AdminPage'
import AddRoomPage from './component/admin/AddRoomPage'
import EditRoomPage from './component/admin/EditRoomPage'
import EditBookingPage from './component/admin/EditBookingPage'
// import { AdminRoute } from './service/guard';
// import { ProtectedRoute } from './service/guard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            {/*   Public Routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/rooms" element={<AllRoomsPage />} />
            <Route path="/find-booking" element={<FindBookingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route exact path="/login" element={<LoginPage />} />


            {/* <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsPage />} />}
            /> */}
            <Route path="/profile" element={<EditProfilePage />} />
            <Route path="/edit-profile" element={<ProfilePage />} />
            <Route path="/*" element={<Navigate to="/home" />} />


            {/* Admin */}
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/manage-rooms" element={<ManageRoomPage />} />
            <Route path="/admin/edit-room/:roomId" element={<EditRoomPage />} />
            <Route path="/admin/add-room" element={<AddRoomPage />} />
            <Route path="/admin/manage-bookings" element={<ManageBookingsPage />} />
            <Route path="/admin/edit-booking/:bookingCode" element={<EditBookingPage />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;

// https://github.com/phegondev/phegon-hotel-booking-and-management/tree/react-mysql/frontend