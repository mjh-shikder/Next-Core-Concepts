import DashboardSidebar from '@/components/shared/DashboardSidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <DashboardSidebar></DashboardSidebar>
            {children}
        </div>
    );
};

export default layout;