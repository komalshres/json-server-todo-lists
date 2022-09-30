import React from "react";

const Card = ({ title, extra_class, children }) => {
  return (
    <div className={`card ${extra_class}`} style="width: 18rem;">
      <div extra_className="card-header">{title}</div>
      {children}
    </div>
  );
};

export default Card;
