import React, { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import { Sub } from "../../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { LOAD_MOVIES_REQUEST } from "../../store/reducers/movie";
import { BackgroundImg, MovieWrapper } from "./Movie.styled";
import { Row, Col } from "antd";
import Card from "../../components/Card";

function Movie() {
  const dispatch = useDispatch();
  const { movies, movieType } = useSelector((state) => state.movie);

  useEffect(() => {
    if (movieType === "") {
      dispatch({
        type: LOAD_MOVIES_REQUEST,
        data: "0",
      });
    }
  }, []);

  const MouseEnter = (e) => {
    console.log("Rn");
  };
  return (
    <MovieWrapper>
      <Row gutter={[16, 16]}>
        {movies &&
          movies.map((movie, index) => (
            <Card
              key={index}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                  : null
              }
              movieId={movie.id}
              movieTitle={movie.title}
              movieBackImg={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
              onMouseEnter
             />
          ))}
      </Row>
    </MovieWrapper>
  );
}

export default Movie;
