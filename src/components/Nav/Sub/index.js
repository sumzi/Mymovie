import React, { useEffect } from "react";
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
  const { movieType } = useSelector(state => state.movie)
  const dispatch = useDispatch();

  const typeChange = (e) => {
    console.log(e.target.id);
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      data: e.target.id,
    });
  };

  
  return (
    <SubWrapper>
      {menuType.map((v,i) => {
        return (
          <Menu onClick={typeChange} key={i} id={i} flag={movieType === v.type ? 1 : 0}>{v.type}</Menu>
        )
      })}
      
    </SubWrapper>
  );
}

export default Sub;
