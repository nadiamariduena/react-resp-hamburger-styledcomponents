import React, { useState } from "react"; //anim 1_
import styled from "styled-components";
import NavbarRight from "./NavbarRight";
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

  //
  z-index: 20;
  display: none;
  //
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  //
  //   -----------
  //   THE LINES styles
  div {
    width: 1.5rem;
    height: 0.2rem;
    //
    // anim 4_)
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
  // here you tell that the initial "state" is open:
  // const [state, setState] = useState(initialState);
  //     const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false); //anim 2_

  return (
    <>
      {/* // //anim 3_ */}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* 
        
        what this does: get the false value of the open
        and transform it to  TRUE and if open is true/opened 
        transform it to FALSE
        
        
        */}
        {/* the burger lines */}
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarRight open={open} />
    </>
  );
};

export default Burger;

/*

                                            -----------
                                            ANIM 
                                            -----------

                        correspond to the animation steps

        1) REPLACE THE :

            import React from "react"; 

        by 

        import React, { useState } from "react"; 


        Using the  { useState } will allow us to create
        the animation by setting up the state and the setState 
        , the state is the default state of the element we want to
        handle in this case the burger lines, and the setState is the 
        changed state of this element "changed when clicked" as it will
        change the default initial state.




        2_) declare it, here you chose how it will be called,
            since we have to open it to see the content i will call it "open":


              const [open, setOpen] = useState(false); 

        - If you notice the initial/default is : open
        - and the change state of the default will be: setOpen
        - useState is the hook state(which is : FALSE)




        3)_ Add the hook "usestate" to the element you want to change
        "the lines parent box" :



    <StyledBurger open={open} onClick={() => setOpen(!open)}>
   
        
        what this does: get the false or default value of the open
        and transform it to  TRUE, and if open is true or opened 
        transform it to FALSE/close
        
    
   
      <div />
      <div />
      <div />


    </StyledBurger>



        4_ ) ONCE THIS IS DONE, add the {open} to the 3 lines :




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


      - this line is going to be send away in an x axe when clicked for then
      the line 1 and the line 3 will form the x shape.

       &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      //   default is 0 and when opened is 1
      opacity: ${({ open }) => (open ? 0 : 1)};
    }



    ******

   ITS NOT GOING TO WORK YET as you have to add the following:

  

        // this is just the lines changing color when clicked
    background-color: ${({ open }) => (open ? "#ccc" : "#222")};


    ---------
    transform-origin: 1px;  //this will make the X shape crossing possible

    ------------
    // 
    // without the linear transition, the line in the middle will not move
    transition: all 0.3s linear;







*/
