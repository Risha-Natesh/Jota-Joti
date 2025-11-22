import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-6 border-t">
      <div className="container mx-auto text-center text-foreground/70">
        <p>&copy; {new Date().getFullYear()} Prakruthi Shaale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
