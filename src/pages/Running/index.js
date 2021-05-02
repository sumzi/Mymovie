import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import Sub from "../../components/Nav/Sub";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_MOVIES_REQUEST,
  ADD_MOVIES_REQUEST,
} from "../../store/reducers/movie";
import { MovieWrapper, Wrapper, Header, Detail } from "./Running.styled";
import { Row } from "antd";
import { RunningCard } from "../../components/Card";

function Movie() {
  const dispatch = useDispatch();
  const { movies, movieId, page, hasMoreMovies, addPostsLoading, backgroundImage } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    if (movieId === null) {
      dispatch({
        type: LOAD_MOVIES_REQUEST,
        data: 0,
      });
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 400
      ) {
        if (hasMoreMovies && !addPostsLoading) {
          const moviePage = page + 1;
          dispatch({
            type: ADD_MOVIES_REQUEST,
            data: {
              movieId: movieId,
              page: moviePage,
            },
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      // 안하면 메모리 쌓임
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMoreMovies, addPostsLoading, movieId, page, dispatch]);

  return (
    <Wrapper>
      {backgroundImage && (
        <>
          <Header
            bgPath={`${IMAGE_BASE_URL}original${backgroundImage.backdrop_path}`}
          >
            <Detail>
              <div>{backgroundImage.title}</div>
            </Detail>
          </Header>
          <MovieWrapper>
            <Sub />
            <Row gutter={[30, 30]}>
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
      )}
    </Wrapper>
  );
}

export default Movie;
