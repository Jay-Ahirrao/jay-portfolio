import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Jay Ahirrao. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
