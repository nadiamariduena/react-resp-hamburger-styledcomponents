import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  left: 20px;

  //after setting open the opening of the nav, you have to set up the closing
  //
  z-index: 20;
  display: none;
  //
  //
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  //
  //
  div {
    width: 1.5rem;
    height: 0.2rem;

    // the following BG color should change based on the condition in line 29:
    //  <StyledBurger open={open} onClick={() => setOpen(!open)}>

    background-color: ${({ open }) => (open ? "#111" : "#222")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    //this is related to the origin of rotation of the lines
    //
    //
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      //   default is 0 and when opened is 1
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      // will rotate on the sense contraire to the (1) one
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  //   if open is false transform it to true
  //  if open is true , transform it to false:  onClick={() => setOpen(!open)}>

  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* the divs below represent the lines of the hamburger */}
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </React.Fragment>
  );
};

export default Burger;
