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

		console.log(props);
		console.log(Component);

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


function Button({ text, hover }) {
  return <button>{hover ? "Hovering!" : text}</button>;
}

const HoverButton = withHover(Button);

export function HOC() {
  return <HoverButton text="Click me!" />;
}
