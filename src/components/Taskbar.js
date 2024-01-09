import React, { useState } from 'react';
import './Taskbar.css'; // You can create a Taskbar.css file for styling
import ProfilePicture from '../components/ProfilePicture.js';
import { Link } from 'react-router-dom';
const Taskbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownItemClick = (item) => {
    // Handle the selected item from the dropdown menu
    console.log(`Selected: ${item}`);
    // You can add more functionality here
    // For example, you might want to navigate to a different page or perform an action
  };

  return (
    <div className="taskbar-container">
      <div className="taskbar">
        <Link to="/" className="start-button">
        <ProfilePicture src="https://avatars.githubusercontent.com/u/22777164?v=4" alt="Profile Picture" size = "20px" />
        <span className="spacer" />
        <span className="title">semperexploro</span>
        </Link>

        {/* <div className="start-menu" onClick={toggleDropdown}>
          Menu
        </div> */}
        {dropdownVisible && (
          <div className="dropdown-menu">
            <div onClick={() => handleDropdownItemClick('Program 1')}>Program 1</div>
            <div onClick={() => handleDropdownItemClick('Program 2')}>Program 2</div>
            <div onClick={() => handleDropdownItemClick('Program 3')}>Program 3</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Taskbar;
