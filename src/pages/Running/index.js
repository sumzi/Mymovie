import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import Sub from '../../components/Nav/Sub';
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MOVIES_REQUEST,ADD_MOVIES_REQUEST } from "../../store/reducers/movie";
import { BackgroundImg, MovieWrapper,Wrapper } from "./Running.styled";
import { Row } from "antd";
import { RunningCard } from '../../components/Card';
import Footer from '../../components/Footer';

function Movie() {
  const dispatch = useDispatch();
  const { movies, movieId, page, hasMoreMovies, backgroundImage, addPostsLoading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      data: 0,
    });
  }, [dispatch]); 

  
  useEffect(() => {
    function onScroll() {
      //console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMoreMovies && !addPostsLoading) {
          const moviePage = page + 1;
          dispatch({
            type: ADD_MOVIES_REQUEST,
            data: {
              movieId: movieId,
              page: moviePage,
            }
          });
        } 
      }
    }  
    window.addEventListener('scroll', onScroll);
    return () => {
      // 안하면 메모리 쌓임
      window.removeEventListener('scroll', onScroll);
    };

  },[hasMoreMovies, addPostsLoading, movieId, page, dispatch]);
 


  return (
    <Wrapper>
      {backgroundImage && (
        <BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${backgroundImage}`} />
      )}
      <Sub />
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
      <Footer />
    </Wrapper>
  );
}

export default Movie;
