import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

//
const Header = styled.header`
  width: 100%;
  min-height: 3vh;
  border-bottom: 1px solid #000;
  padding: 15px 0;
  // position: fixed;
  display: flex;
  justify-content: space-around;
  //
  background: #fff;
  .logo {
    letter-spacing: 15px;
  }
`;

/*



*/
const Navbar = () => {
  return (
    <React.Fragment>
      <Header>
        <h3 className="logo">LOGO</h3>
        <nav>
          <Burger />
        </nav>
      </Header>
    </React.Fragment>
  );
};
export default Navbar;
