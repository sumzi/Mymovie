import React,{ useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../Config';
import { Sub } from '../../components/Nav';
import { BackgroundImg, Detail } from './Home.styled';
import { HOME_MOVIE_REQUEST } from '../../store/reducers/home';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';

function Home() {
  const dispatch = useDispatch();
  const { homeMovie, homeMovieLoading } = useSelector(state => state.home);
  
  useEffect(() => {
    dispatch({
      type: HOME_MOVIE_REQUEST
    });
  }, []);
  
  return (
    <>
      {homeMovieLoading? 
      (<Loading />)
      : (<BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${homeMovie.backdrop_path}`}>
        <Sub />
        <Detail>
          <h1>{homeMovie.title}</h1>
          <h1>{homeMovie.tagline}</h1>
        </Detail>
      </BackgroundImg>
      )}
    </>
  )
}

export default Home
