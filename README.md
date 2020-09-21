## RESPONSIVE NAVBAR

#### Continuing my research for the Simple navbar

<p>I am not too convinced of this kind of navbar because i love gsap animated ones, but 
i think it s good to discover as many possibilities as possible.</p>

<br>
<br>

### PREVIEW

<p> You will need to set up a useState to animate the lines </p>

```javascript
import React, { useEffect, useState } from "react";
```

<br>
<br>

```javascript
const Burger = () => {
  const [open, setOpen] = useState(false);

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
```

<br>
<br>

```javascript
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
```

<br>
<br>
<br>
<br>

<hr>

## Dependencies

```javascript

npm i react

npm i react-dom

npm i react-scripts

npm i node-sass --save

npm i autoprefixer@9.8.0

npm i gh-pages --save-dev

npm i styled-components

npm i react-router-dom
```

<br>
<br>
