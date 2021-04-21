import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import Sub from '../../components/Nav/Sub';
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MOVIES_REQUEST } from "../../store/reducers/movie";
import { BackgroundImg, MovieWrapper } from "./Running.styled";
import { Row } from "antd";
import { RunningCard } from '../../components/Card';

function Movie() {
  const dispatch = useDispatch();
  const { movies, movieType, backgroundImage } = useSelector((state) => state.movie);

  useEffect(() => {
    if (movieType === "") {
      dispatch({
        type: LOAD_MOVIES_REQUEST,
        data: "0",
      });
    }
  }, []); 

  return (
    <>
      <Sub />
      {backgroundImage && <BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${backgroundImage}`}/>}
      <MovieWrapper>
        <Row gutter={[25, 25]}>
          {movies &&
            movies.map((movie, index) => (
              <RunningCard
                key={index}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieTitle={movie.title}
                movieBgImg={movie.backdrop_path}
              />
            ))}
        </Row>
      </MovieWrapper>
    </>
  );
}

export default Movie;
