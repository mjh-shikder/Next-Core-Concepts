import React from 'react';
import Image from "next/image";
import {
  Shield,
  Droplets,
  Gauge,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";

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
        <div className="bg-gray-50 min-h-screen">
          {/* Hero Section */}
          <div className="relative h-[400px] w-full">
            <Image
              src={service.img}
              alt={service.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {service.name}
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-200">
                  Deep cleaning protection for your vehicles underside.
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Left Content */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                    Service Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description.replace(/<[^>]+>/g, "")}
                  </p>
                </div>

               
              </div>

              {/* Right Pricing Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border h-fit sticky top-10">
                <h3 className="text-xl font-semibold mb-6">Service Details</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Droplets className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-600">
                      Deep underbody pressure wash
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Shield className="text-indigo-600 w-5 h-5" />
                    <span className="text-gray-600">
                      Rust & corrosion prevention
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Gauge className="text-purple-600 w-5 h-5" />
                    <span className="text-gray-600">
                      Improved component longevity
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="text-gray-700 w-5 h-5" />
                    <span className="text-gray-600">
                      {service.duration} minutes duration
                    </span>
                  </div>
                </div>

                <div className="border-t my-8"></div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-6">
                    ${service.price}
                  </p>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-blue-600 text-white py-16">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl font-bold mb-4">
                Protect Your Vehicle from Rust & Corrosion
              </h2>
              <p className="mb-6 text-blue-100">
                Especially recommended for vehicles exposed to snow and salted
                roads.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
    );
};

export default ServiceDetailsPage;