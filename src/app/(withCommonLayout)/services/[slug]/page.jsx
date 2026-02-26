import React from 'react';


const getSingleService = async (id) => {
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
  );
  const data = await res.json();
  return data;
};



const ServiceDetailsPage = async ({ params }) => {
    
    const {slug} = await params;
    const servcieRes = await getSingleService(slug);
    const service = servcieRes?.data;
    console.log(service);
    
    
    

    return (
        <div>
            Service Details Page
        </div>
    );
};

export default ServiceDetailsPage;