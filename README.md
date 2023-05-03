### HOC
In functional components, higher-order components (HOCs) are functions that take a component as an argument and return a new component with some additional functionality. The HOC can add props to the original component, modify the behavior of the component, or even completely replace it with a new one.

Here's an example of a HOC that adds a "hover" prop to a component that changes its background color when the mouse hovers over it:


import React, { useState } from "react";

function withHover(Component) {
  return function WithHover(props) {
    const [isHovering, setIsHovering] = useState(false);

    function handleMouseEnter() {
      setIsHovering(true);
    }

    function handleMouseLeave() {
      setIsHovering(false);
    }

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: isHovering ? "yellow" : "white" }}
      >
        <Component {...props} hover={isHovering} />
      </div>
    );
  };
}



This HOC takes a component as an argument and returns a new component (WithHover) that adds a hover prop to the original component. When the mouse hovers over the WithHover component, the isHovering state is set to true, which changes the background color. Finally, the Component is rendered with the hover prop passed down as a prop. The HOC can then be used like this:

function Button({ text, hover }) {
  return <button>{hover ? "Hovering!" : text}</button>;
}

const HoverButton = withHover(Button);

function App() {
  return <HoverButton text="Click me!" />;
}

In this example, the Button component is wrapped with the withHover HOC to create the HoverButton component. The HoverButton component has a hover prop that is added by the withHover HOC and can be used to change its appearance when the mouse hovers over it.
