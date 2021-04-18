import React from "react";
import { Link } from "react-router-dom";
import { RightWrapper } from "./Main.styled";

function Right() {
  return (
    <RightWrapper>
      <Link to="/running">
        <div>🎥</div>
      </Link>
      <Link to="/like">
        <div>🤍</div>
      </Link>
      <Link to="/search">
        <div>🔍</div>
      </Link>
    </RightWrapper>
  );
}

export default Right;
