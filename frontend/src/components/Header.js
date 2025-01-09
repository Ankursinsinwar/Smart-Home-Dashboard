// import React from 'react';
// import './Header.css';

// const Header = () => (
//   <header className="header">
//     <h1>Raam Raam JI 🙏</h1>
//     <p>Monday 20 June, 2022</p>
//   </header>
// );

// export default Header;


import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="header">
      <h1>Ram Ram JI 🙏</h1>
      <p>{currentDate}</p>
    </header>
  );
};

export default Header;
