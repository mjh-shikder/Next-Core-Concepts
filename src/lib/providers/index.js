import BookingContextProvider from '@/context/BookingContext';
import UserContextProvider from '@/context/UserContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <UserContextProvider>
            <BookingContextProvider>
                {children}
            </BookingContextProvider>
        </UserContextProvider>
    );
};

export default Providers;