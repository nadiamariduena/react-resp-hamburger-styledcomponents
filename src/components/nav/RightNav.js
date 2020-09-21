import React from "react";
import styled from "styled-components";

//
//
/*

DONT FORGET to import this to style:
import styled from "styled-components";


const Nav = styled.nav` , the nav at the end will 
grab the nav styles for the library, if you had 
put const UL and then styled.ul , it will only 
grab the uld styles  , BUT some how when you add 
Nav instead of the Ul, when you set up the media query
it wont work, so i had to set up only with the Ul.



*/

//
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    //
    //
    flex-flow: column nowrap;
    background-color: #ff00aae5;
    position: fixed;
    /*

if you want to position the window openning to the right side change the following:
"translateX(-100%)")};

the minus will decide wether it goes to the right or the left, then of course you must to 
move the hamburger also.

top: 0;
left: 0;



*/
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    li {
      color: #111;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      &:hover {
        color: #ff0;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>
      <li>News</li>
      <li>Contact</li>
    </Ul>
  );
};

export default RightNav;
