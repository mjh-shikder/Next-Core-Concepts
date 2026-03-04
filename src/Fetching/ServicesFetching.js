"use server";
export const getSingleService = async (id) => {
    const res = await fetch(
        `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
    );
    const data = await res.json();
    return data;
};


export const getAllServices = async (searchParams) => {
    const getParams = new URLSearchParams(searchParams).toString();
    console.log(getParams);

    const res = await fetch(
        `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`,
    );
    const data = await res.json();
    return data;
};

