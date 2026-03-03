"use client";
import { BookingContext } from '@/context/BookingContext';
import React, { use } from 'react';


const BookingButton = ({ service }) => {
    
const { bookings,  addBooking, removeBooking } = use(BookingContext)
    
const isAlreadyBooking = bookings?.find(b=> b?._id === service?._id)

    console.log(bookings, isAlreadyBooking);
    
    return (
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
          onClick={()=> isAlreadyBooking ? removeBooking(service?._id) : addBooking(service?._id)  }  
            
        >
        { isAlreadyBooking ? "Remove From Booking" :"Book This Service" }
      </button>
    );
};

export default BookingButton;