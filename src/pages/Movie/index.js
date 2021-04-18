import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import Sub from '../../components/Nav/Sub';
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MOVIES_REQUEST } from "../../store/reducers/movie";
import { BackgroundImg, MovieWrapper } from "./Movie.styled";
import { Row } from "antd";
import Card from '../../components/Card';
function Movie() {
  const dispatch = useDispatch();
  const { movies, movieType, backgroundImg } = useSelector((state) => state.movie);

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
      <BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${backgroundImg}`}/>
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
                movieBgImg={movie.backdrop_path}
              />
            ))}
        </Row>
      </MovieWrapper>
    </>
  );
}

export default Movie;
