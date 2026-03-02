"use client";

import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

const LoginPage = () => {
  
    const { setUser } = use(UserContext);
    const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();
      const email = e.target.email.value; 
      const password = e.target.password.value;
    

      if (email === "sassoaustin@gmail.com" && password === "mjhg") {
          const currentUser = { email, name: email?.split("@")?.[0], }
       
          setUser(currentUser)
          
          alert('☑️ Login Successful')
          router.push("/dashboard")
      } else {
          alert('❌ Credntial Invalid!')
      }
      
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
        
            name="email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
         
            name="password"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>


        <button
          type="submit"
          
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
         Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
