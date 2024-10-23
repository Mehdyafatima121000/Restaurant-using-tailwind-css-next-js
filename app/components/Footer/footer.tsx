// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-100 mt-12 fixed bottom-0 w-full"> {/* Added fixed and bottom-0 */}
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} My Restaurant</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
