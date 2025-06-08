import axios from 'axios';

export interface Booking {
    eventId: string;
    firstName: string;
    lastName: string;
    email?: string;
}

const API_URL = 'https://ecutb-laine-bookingservice-hgc0g9asced3ceb2.swedencentral-01.azurewebsites.net/api/bookings';

export const createBooking = async (booking: Booking) => {
    const response = await axios.post<Booking>(API_URL, booking);
    return response.data;
}