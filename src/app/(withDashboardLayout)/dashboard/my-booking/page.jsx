"use client"
import { BookingContext } from '@/context/BookingContext';
import React, { useContext } from 'react';

const MyBookings = () => {

    const {bookings, addBooking, removeBooking} = useContext(BookingContext)
console.log(bookings);

    return (
        <div>
            jjjj
        </div>
    );
};

export default MyBookings;