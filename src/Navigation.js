import React from 'react'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <AiOutlineLock /> Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navigation