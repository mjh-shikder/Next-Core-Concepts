import Container from "@/components/shared/Container";
import React from "react";
import ServiceCard from "./_components/ServiceCard";
import SearchService from "./_components/SearchService";

const getAllServices = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log(getParams);

  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`,
  );
  const data = await res.json();
  return data;
};

const ServicesPage = async ({ searchParams }) => {
  const getParams = await searchParams;
  const { searchTerm } = await searchParams;

  const services = await getAllServices({ ...getParams });
  console.log(services);

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold text-center mt-5 text-purple-700 animate-bounce  ">
          Service Page
        </h1>
          {/* Searching  */}
        <div className="my-5 ">
          <SearchService></SearchService>
        </div>

        {services?.meta?.total === 0 ? (
          <div className="font-bold text-center text-3xl">No Data Found</div>
        ) : (
          <div className="grid grid-cols-3 gap-5 ">
            {services?.data?.map((service) => {
              return (
                <ServiceCard service={service} key={service?._id}></ServiceCard>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ServicesPage;
