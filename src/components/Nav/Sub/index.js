import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubWrapper, Menu } from "./Sub.styled";
import { LOAD_MOVIES_REQUEST } from "../../../store/reducers/movie";

const menuType = [
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
  const dispatch = useDispatch();

  const typeChange = (e) => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      data: e.target.dataset.idx
    });
  };
  return (
    <SubWrapper>
      {menuType.map((v,i) => {
        return (
          <div key={v.type}>
            <Link to="/movie">
              <Menu
                data-type={v.type}
                data-path={v.path}
                data-idx={i}
                onClick={typeChange}
              >
                {v.type}
              </Menu>
            </Link>
          </div>
        );
      })}
    </SubWrapper>
  );
}

export default Sub;
