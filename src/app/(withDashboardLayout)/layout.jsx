import DashboardSidebar from '@/components/shared/DashboardSidebar';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex gap-4'>
            <DashboardSidebar></DashboardSidebar>

            <div className="ml-[220px] ">
                {children}
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default layout;