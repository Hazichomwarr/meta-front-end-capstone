import React, { memo } from "react";

const Demo = memo(() => {
  return (
    <div className="grid-container">
      <div className="header">Header</div>
      <div className="item1">Small Box 1</div>
      <div className="item2">Small box 2</div>
      <div className="item3">Small box 3</div>
      <div className="main">Main content</div>
      <div className="reviews">Testimonials</div>
      <div className="about">About</div>
      <div className="sidebar">Sidebar</div>
      <div className="footer">Footer</div>
    </div>
  );
});

export default Demo;
