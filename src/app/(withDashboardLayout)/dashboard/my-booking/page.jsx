"use client"
import ServiceCard from '@/app/(withCommonLayout)/services/_components/ServiceCard';
import { BookingContext } from '@/context/BookingContext';
import { Heading2 } from 'lucide-react';
import React, { useContext } from 'react';

const MyBookings = () => {

    const {bookings, addBooking, removeBooking} = useContext(BookingContext)
console.log(bookings);

    return (
        <>
            {bookings.length == 0 ? <h2 className='font-bold text-6xl text-purple-400'>No Bookings</h2> : <div>
                {bookings?.map((booking, index) => {
                    return (
                        <ServiceCard service={booking} key={index} ></ServiceCard>
                    );
                })}
            </div>}
        </>
    );
};

export default MyBookings;