import React from 'react';
import Image from 'next/image';

export default function MyComponent() {
  return (
    <div 
      className="bg-cover bg-center h-screen flex items-center justify-center" 
      >
      <div className="text-purple-990 text-center">
        <h1 className="text-4xl  font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg mb-6">Discover amazing taste and enjoy the food.</p>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
                   <p className="mt-6 text-lg">
            Thank you for getting started! We’re excited to have you something special. Here’s what you can expect...
          </p>
        
      </div>
      
    </div>
  );
}
