import React from 'react';

const NestedDynamicRoute = async ({ params }) => {
    
    const {slug, id, wash} = await params;
    console.log(slug, id, wash);
    

    return (
        <div>
            
        </div>
    );
};

export default NestedDynamicRoute;