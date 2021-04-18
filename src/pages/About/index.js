import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DETAIL_MOVIE_REQUEST } from '../../store/reducers/about';
import Loading from '../../components/Loading';
function About(props) {
  const dispatch = useDispatch();
  const { movie, detailMovieLoading } = useSelector(state => state.about);
  const movieId = props.match.params.movieId;
  
  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIE_REQUEST,
      data: movieId,
    })
  }, []);
  return (
    <>
    {detailMovieLoading
    ? <Loading />
    : <div>
      <h1>{movie.title}</h1>
      <h1>{movie.originalTitle}</h1>
      <p>{movie.overview}</p>
     </div>}
    </>
  )
}

export default About
