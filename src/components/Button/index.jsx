import React from "react";

export const BadgeButton = ({ type, children }) => {
  return (
    <button className={`badge bg-${type || "primary"}`}>{children}</button>
  );
};
