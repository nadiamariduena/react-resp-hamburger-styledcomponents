import React from "react";
import styled from "styled-components";

//
//

//
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    margin-right: 15px;
  }

  /*------------------------------------------

this is the second part of this file, from here
on you will adapt the UL content to the mobile
version, this means that the ul elements
instead of being positioned in INLINE or row
 they will change to a column, for that you
 have to add the media query





*/

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100vw;
    height: 100vh;

    background-color: rgba(255, 255, 0, 0.561);
    // ---------------
    // this to position it right on the top and right on the left
    top: 0;
    right: 0;
    position: fixed;
    // --------------
    //this comes after you have set up the animation to open and close, NOT BEFORE
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    // ---------------
    // to center it
    text-align: center;
    // display: flex;
    justify-content: space-evenly;
    // ---------------
    li {
      color: #111;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      &:hover {
        color: #f0f;
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

/*
                  1_) 


 you have to copy the ul content and add it 
in this file , you have to leave the header with 
the logo inside
the Navbar file, you can keep the nav also there
 but the Ul
 content have to be here as it s going to be linked
 to the hamburger FILE.


 the hamburger file will contain the window/toggle 
 that
 will open on CLICK , when the window will open
  it will show the content of the RightNav.js so
  this file over here:

// THIS IS THE ORIGINAL SET UP before BIG changes
// to set this up add the 100 vw and vh to reach the whole screen and BG to see it.
// 
// 
import React from "react";
import styled from "styled-components";

//
//
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    margin-right: 15px;
  }

// ----------
// media query
// -----------

@media (max-width: 768px) {
  flex-flow: column nowrap;
}
`;

// ----------

const RightNav = () => {
return (
  <Ul>
    <li>Home</li>
    <li>About</li>
    <li>News</li>
    <li>Contact</li>
  </Ul>
);
};

export default RightNav;


*/

/*------------------------------------------


                  2_) 

                  AFTER ADDING THE FOLLOWING 
                  TO THE STEP 1:


import React from "react";
import styled from "styled-components";



// ---------------------
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    margin-right: 15px;
  }
// -------------------


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100vw;
    height: 100vh;
    // add transparency for production, it helps a lot
    background-color: rgba(255, 255, 0, 0.561);
    // ---------------
    // this to position it right on the top and right on the left
    top: 0;
    left: 0;
    position: fixed;
    // ---------------
    // to center it
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    // ---------------
    li {
      color: #111;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      &:hover {
        color: #f0f;
      }
    }
  }
`;

// ------------------------

const RightNav = () => {
return (
  <Ul>
    <li>Home</li>
    <li>About</li>
    <li>News</li>
    <li>Contact</li>
  </Ul>
);
};

export default RightNav;



*/

/*------------------------------------------




                  3_)

                  Go to the burger.js and add the 
                  following:


type : rafc to create an arrow function component
(you have to have the react snippets installed)

------------------------
default
------------------------



import React from "react";
import styled from "styled-components";

//
//

const StyledBurger = styled.div``;

//
export const Burger = () => {
  return (
  <StyledBurger>





      
    </StyledBurger>)
};

              



4_) 


------------------------------
after creating the arrow function there and set
up the step 3, go to the Navbar.js and add the following:
------------------------------


import Burger from "./Burger";

and 

 <Burger />

like so: 

    <React.Fragment>
      <Header>
        <h3 className="logo">LOGO</h3>
        <nav>
          <Burger />
          <NavbarRight />
        </nav>
      </Header>
    </React.Fragment>

If you dont do that you will not see the styles you are
going to set up in the burger.






                                                      5_)







------------------------
add the styles for the burger appearance
------------------------

import React from "react";
import styled from "styled-components";

//
//


const StyledBurger = styled.div`
  //   ***  TO SEE the styles *** , IMPORT the burger to the Navbar.js
  //
  // the burger position on the page
  width: 1.5rem; //the size/square of the burger
  height: 1.5rem;
  position: fixed;
  border: 1px solid #000;
  top: 15px;
  left: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  //
  //
  //   -----------
  //   THE LINES styles
  div {
    width: 1.5rem;
    height: 0.2rem;
    background-color: #333;
  }
`;


//
export const Burger = () => {
  return (
    <StyledBurger>
   
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;








-------------------------------------------------------




                                            6_)






------------------------
add the animation to the burger.js
------------------------





import React, { useState } from "react"; //anim 1_
import styled from "styled-components";
//   ***  TO SEE the styles *** , IMPORT the burger to the Navbar.js

//
//

const StyledBurger = styled.div`
  //   ***  TO SEE the styles *** , IMPORT the burger to the Navbar.js
  //
  // the burger position on the page
  width: 1.5rem; //the size/square of the burger
  height: 1.5rem;
  position: fixed;

  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  //
  //
  //   -----------
  //   THE LINES styles
  div {
    width: 1.5rem;
    height: 0.2rem;
    //
 
    // background-color: #333;
    background-color: ${({ open }) => (open ? "#ccc" : "#222")};
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

//
export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    //anim 3_
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;








-------------------------------------------------------







                                            7_)






------------------------
back to the NavbarRight.js after the animation part
------------------------



go to the Navbar.js and copy the    <NavbarRight />

from :

      <nav>
          <Burger />
          <NavbarRight />
        </nav>


and paste it inside the Burger.js, and dont forget to take the import from there too:

it should look like this on to:

import React, { useState } from "react"; //anim 1_
import styled from "styled-components";
import NavbarRight from "./NavbarRight";

and on the bottom:


  return (
    <>
   
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarRight />
    </>
  );
};

-  If you noticed, i added a <> </> fragment stuff because otherwise it 
will show an error, so you have to wrap it all .










                                            8_)






------------------------
Now add the {open } property to the :  <NavbarRight />
that you just pasted in the Burger.js
------------------------

     <NavbarRight open={open} />

Add the {open} anim settings to the content of the RightNav, so that
when the burger will be clicked the content will show.

 










                                            9_)






------------------------
after that, go back to the NavbarRight.js
------------------------

delete the   display: none;

then add the following condition to hide the toggle and to 
open it under the click function:

transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

transition: transform 0.3s ease-in-out;


***  To make the toggle work add the following,
 { open } like so:


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>



Now it should work!!  BUT NOW WE NEED to put the hamburger over the
toggle to reach it:


go to the Burger.js and add the z-index: 20;


like so :

  justify-content: space-around;
  flex-flow: column nowrap;
  //
  z-index: 20;
  //
  //   -----------
  //   THE LINES styles
  div {








                                            10_)






------------------------
To stop showing the hamburger on the desktop version
------------------------


you will have to add a similar media query like in this
file but to the Burger.js












BUT IF YOU WANT TO HAVE THE HAMBURGER in desktop as well
as in the mobile, dont add media queries to the burger.js 
and to the Navbar.js like so:



const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-right: 15px;
  }



  flex-flow: column nowrap;
  width: 300px;
  height: 100vh;

  background-color: rgba(255, 255, 0, 0.561);
  // ---------------
  // this to position it right on the top and right on the left
  top: 0;
  right: 0;
  position: fixed;
  // --------------
  //this comes after you have set up the animation to open and close, NOT BEFORE
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  // ---------------
  // to center it
  text-align: center;
  // display: flex;
  justify-content: space-evenly;
  // ---------------
  li {
    color: #111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    &:hover {
      color: #f0f;
    }
  }


  
`;


*/
