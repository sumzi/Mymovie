import React,{ useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../Config';
import { Sub } from '../../components/Nav';
import { BackgroundImg } from './Home.styled';
import { LOAD_MOVIES_REQUEST } from '../../store/reducers/movie';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const { homeMovie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  
  //console.log(movies.title);
  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      data: 'popular',
    });
  }, []);

  return (
    <>
      {homeMovie && <BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${homeMovie.backdrop_path}`}>
        <Sub />
        <h2>{homeMovie.title}</h2>
        <h2>{homeMovie.tagline}</h2>
      </BackgroundImg>}
    </>
  )
}

export default Home
