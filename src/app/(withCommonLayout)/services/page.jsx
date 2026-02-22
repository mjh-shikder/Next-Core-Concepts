import Container from '@/components/shared/Container';
import React from 'react';
import ServiceCard from './_components/ServiceCard';

const getAllServices = async () => {
    const res = await fetch(
      "https://car-washing-system-cleanify-server.vercel.app/api/v1/services",
    );
    const data = await res.json()
    return data;
}

const ServicesPage = async () => {
    const services = await getAllServices();
    console.log(services);
    
    return (
        <div>
            <Container>

                <h1 className='text-3xl font-bold text-center mt-5 text-purple-700 '>Service Page</h1>
                {
                    services?.data?.map(service => {
                        return <ServiceCard service={service} key={service._id}></ServiceCard>
                    })
                }
            </Container>
        </div>
    );
};

export default ServicesPage;