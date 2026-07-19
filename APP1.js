import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "hello from react");
// const roots = ReactDOM.createRoot(document.getElementById("roots"));
// roots.render(heading);

//react.createElement => object => HTMLElement(render)

// const heading2 = React.createElement("h1", {}, "hi this day two of react");
// console.log(heading2);

// jsx-html like ot xml like syntax

// const jsxheading = <h1 className="head">hi react </h1>;
// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// react element
const heading = (<h1 className="head"> hi this react element</h1>);

// react function component
const HeadingComponent = () => (
  <div id="container">
    <h1 className="head1">hi this is react from functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
root.render(<HeadingComponent/>)