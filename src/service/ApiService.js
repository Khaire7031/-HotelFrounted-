import axios from 'axios';

export default class ApiService {
    static BASE_URL = 'http://localhost:3000';

    static getHeader() {
        const token = localStorage.getItem('token');
        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    }

    /** AUTH */

    /**
     * Registers a new user.
     * @param {Object} registration - The registration details.
     * @returns {Promise<Object>} - The response data.
     */
    static async registerUser(registration) {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }

    /**
     * Logs in a registered user.
     * @param {Object} loginDetails - The login details.
     * @returns {Promise<Object>} - The response data.
     */
    static async loginUser(loginDetails) {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
            return response.data;
        } catch (error) {
            console.error('Error logging in user:', error);
            throw error;
        }
    }

    /** USERS */

    /**
     * Gets all users.
     * @returns {Promise<Array>} - The list of users.
     */
    static async getAllUsers() {
        try {
            const response = await axios.get(`${this.BASE_URL}/users/all`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error getting all users:', error);
            throw error;
        }
    }

    /**
     * Gets the logged-in user's profile.
     * @returns {Promise<Object>} - The user profile.
     */
    static async getUserProfile() {
        try {
            const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error getting user profile:', error);
            throw error;
        }
    }

    /**
     * Gets a single user by ID.
     * @param {string} userId - The user ID.
     * @returns {Promise<Object>} - The user data.
     */
    static async getUser(userId) {
        try {
            const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error getting user:', error);
            throw error;
        }
    }

    /**
     * Gets user bookings by user ID.
     * @param {string} userId - The user ID.
     * @returns {Promise<Array>} - The list of bookings.
     */
    static async getUserBookings(userId) {
        try {
            const response = await axios.get(`${this.BASE_URL}/users/get-user-bookings/${userId}`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error getting user bookings:', error);
            throw error;
        }
    }

    /**
     * Deletes a user by ID.
     * @param {string} userId - The user ID.
     * @returns {Promise<Object>} - The response data.
     */
    static async deleteUser(userId) {
        try {
            const response = await axios.delete(`${this.BASE_URL}/users/delete/${userId}`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }

    /** ROOM */

    /**
     * Adds a new room to the database.
     * @param {FormData} formData - The room data.
     * @returns {Promise<Object>} - The response data.
     */
    static async addRoom(formData) {
        try {
            const response = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
                headers: {
                    ...this.getHeader(),
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error adding room:', error);
            throw error;
        }
    }

    /**
     * Gets all available rooms.
     * @returns {Promise<Array>} - The list of available rooms.
     */
    static async getAllAvailableRooms() {
        try {
            const response = await axios.get(`${this.BASE_URL}/rooms/all-available-rooms`);
            return response.data;
        } catch (error) {
            console.error('Error getting available rooms:', error);
            throw error;
        }
    }

    /**
     * Gets available rooms by date and type.
     * @param {string} checkInDate - The check-in date.
     * @param {string} checkOutDate - The check-out date.
     * @param {string} roomType - The room type.
     * @returns {Promise<Array>} - The list of available rooms.
     */
    static async getAvailableRoomsByDateAndType(checkInDate, checkOutDate, roomType) {
        try {
            const response = await axios.get(
                `${this.BASE_URL}/rooms/available-rooms-by-date-and-type`,
                {
                    params: {
                        checkInDate,
                        checkOutDate,
                        roomType,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error getting available rooms by date and type:', error);
            throw error;
        }
    }

    /**
     * Gets all room types.
     * @returns {Promise<Array>} - The list of room types.
     */
    static async getRoomTypes() {
        try {
            const response = await axios.get(`${this.BASE_URL}/rooms/types`);
            return response.data;
        } catch (error) {
            console.error('Error getting room types:', error);
            throw error;
        }
    }

    /**
     * Gets all rooms.
     * @returns {Promise<Array>} - The list of rooms.
     */
    static async getAllRooms() {
        try {
            const response = await axios.get(`${this.BASE_URL}/rooms/all`);
            return response.data;
        } catch (error) {
            console.error('Error getting all rooms:', error);
            throw error;
        }
    }

    /**
     * Gets a room by ID.
     * @param {string} roomId - The room ID.
     * @returns {Promise<Object>} - The room data.
     */
    static async getRoomById(roomId) {
        try {
            const response = await axios.get(`${this.BASE_URL}/rooms/room-by-id/${roomId}`);
            return response.data;
        } catch (error) {
            console.error('Error getting room by ID:', error);
            throw error;
        }
    }

    /**
     * Deletes a room by ID.
     * @param {string} roomId - The room ID.
     * @returns {Promise<Object>} - The response data.
     */
    static async deleteRoom(roomId) {
        try {
            const response = await axios.delete(`${this.BASE_URL}/rooms/delete/${roomId}`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error deleting room:', error);
            throw error;
        }
    }

    /**
     * Updates a room.
     * @param {string} roomId - The room ID.
     * @param {FormData} formData - The room data.
     * @returns {Promise<Object>} - The response data.
     */
    static async updateRoom(roomId, formData) {
        try {
            const response = await axios.put(`${this.BASE_URL}/rooms/update/${roomId}`, formData, {
                headers: {
                    ...this.getHeader(),
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error updating room:', error);
            throw error;
        }
    }

    /** BOOKING */

    /**
     * Books a room.
     * @param {string} roomId - The room ID.
     * @param {string} userId - The user ID.
     * @param {Object} booking - The booking details.
     * @returns {Promise<Object>} - The response data.
     */
    static async bookRoom(roomId, userId, booking) {
        try {
            const response = await axios.post(
                `${this.BASE_URL}/bookings/book-room/${roomId}/${userId}`,
                booking,
                {
                    headers: this.getHeader(),
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error booking room:', error);
            throw error;
        }
    }

    /**
     * Gets all bookings.
     * @returns {Promise<Array>} - The list of bookings.
     */
    static async getAllBookings() {
        try {
            const response = await axios.get(`${this.BASE_URL}/bookings/all`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error getting all bookings:', error);
            throw error;
        }
    }

    /**
     * Gets a booking by confirmation code.
     * @param {string} bookingCode - The booking confirmation code.
     * @returns {Promise<Object>} - The booking data.
     */
    static async getBookingByConfirmationCode(bookingCode) {
        try {
            const response = await axios.get(`${this.BASE_URL}/bookings/get-by-confirmation-code/${bookingCode}`);
            return response.data;
        } catch (error) {
            console.error('Error getting booking by confirmation code:', error);
            throw error;
        }
    }

    /**
     * Cancels a booking.
     * @param {string} bookingId - The booking ID.
     * @returns {Promise<Object>} - The response data.
     */
    static async cancelBooking(bookingId) {
        try {
            const response = await axios.delete(`${this.BASE_URL}/bookings/cancel/${bookingId}`, {
                headers: this.getHeader(),
            });
            return response.data;
        } catch (error) {
            console.error('Error canceling booking:', error);
            throw error;
        }
    }

    /** AUTHENTICATION CHECKER */

    /**
     * Logs out the user.
     */
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    /**
     * Checks if the user is authenticated.
     * @returns {boolean} - True if authenticated, false otherwise.
     */
    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    /**
     * Checks if the user is an admin.
     * @returns {boolean} - True if the user is an admin, false otherwise.
     */
    static isAdmin() {
        const role = localStorage.getItem('role');
        return role === 'ADMIN';
    }

    /**
     * Checks if the user is a regular user.
     * @returns {boolean} - True if the user is a regular user, false otherwise.
     */
    static isUser() {
        const role = localStorage.getItem('role');
        return role === 'USER';
    }
}
