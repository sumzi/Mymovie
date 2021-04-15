import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubWrapper } from "./Sub.styled";

const menu = [
  {
    type: "Now Playing",
    path: "movie/now_playing",
  },
  {
    type: "Popular",
    path: "movie/popular",
  },
  {
    type: "Top Rated",
    path: "movie/top_rated",
  },
  {
    type: "Upcoming",
    path: "movie/upcoming",
  },
];

function Sub() {
  return (
    <SubWrapper>
      {menu.map((v) => {
        return (
          <div key={v.type}>
            <Link
              to={{
                pathname: "/movie",
                state: {
                  type: v.type,
                  path: v.path,
                },
              }}
            >
              {v.type}
            </Link>
          </div>
        );
      })}
    </SubWrapper>
  );
}

export default Sub;
