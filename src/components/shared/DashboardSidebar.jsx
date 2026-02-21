import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-purple-200 text-gray-800 h-screen '>
            <h2 className='font-bold text-center'>Car Cleanify</h2>

            <div className="flex flex-col gap-5 mt-7 px-3 py-5">
                <Link href={'/dashboard/profile'}>Profile</Link>
                <Link href={'/dashboard/my-booking'}>My Booking</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;