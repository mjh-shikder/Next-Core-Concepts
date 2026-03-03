"use client";
import React, { createContext, useState } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBooking] = useState([]);
  const addBooking = (booking) => [setBooking([...bookings, booking])];
  const removeBooking = (id) => {
    setBooking(bookings.filter((b) => b._id != id));
  };

    const value = {
        bookings,
        setBooking,
        addBooking,
        removeBooking
    };

  return <BookingContext value={value}>{children}</BookingContext>;
};

export default BookingContextProvider;
