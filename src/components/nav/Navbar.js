import React from "react";
import styled from "styled-components";
// import RightNav from "./RightNav";  the rightnav component must to be imported here first
// and then moved to the burger component once the effect of the burger is ready, then add the open property as follows:

import Burger from "./Burger";

const Header = styled.nav`
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

const Navbar = () => {
  return (
    <Header>
      <h3 className="logo">LOGO</h3>
      {/* ---------------------- */}
      <Burger />
    </Header>
  );
};

export default Navbar;
