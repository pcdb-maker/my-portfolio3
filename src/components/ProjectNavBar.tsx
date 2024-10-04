import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const ProjectNavbarContainer = styled.nav`
  top: 0;
  width: 100%;
  margin: 0;
  background: #EFE2BA;; /* Navbar background color */
  display: flex;
  justify-content: space-between; /* Aligns items to the left and right */
  align-items: center;
  padding: 20px 40px; /* Adjust padding as needed */
  z-index: 1000; /* Ensures the navbar is always above other elements */
  transition: background 0.3s;
  overflow: hidden; /* Prevent overflow */
  box-sizing: border-box; /* Include padding and border in element width/height */

  /* Adding the underline with a pseudo-element */
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%; /* Center the underline horizontally */
    transform: translateX(-50%);
    width: 1100px; /* Set your preferred underline length */
    border-bottom: 1.5px solid black; /* The underline */
  }
`;


const ProjectLogo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black; /* Changed logo text color to black */
  overflow: hidden; /* Prevents overflow */
  cursor: pointer; /* Cursor pointer for logo */
`;

