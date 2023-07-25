import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Tasks</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
