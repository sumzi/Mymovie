import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubWrapper, Menu } from "./Sub.styled";
import { LOAD_MOVIES_REQUEST } from "../../../store/reducers/movie";

const menuType = [
  {
    type: "Now",
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
  const { movieId } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  const typeChange = useCallback((e) => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      data: e.target.id,
    });

  }, [dispatch]);

  
  return (
    <SubWrapper>
      {menuType.map((v,i) => {
        return (
          <Menu onClick={typeChange} key={i} id={i} flag={movieId === i ? 1 : 0}>{v.type}</Menu>
        )
      })}
      
    </SubWrapper>
  );
}

export default Sub;
