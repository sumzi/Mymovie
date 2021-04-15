import React, { useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../Config';
import { Sub } from '../../components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { BackgroundImg } from '../Home/Home.styled';
import { LOAD_MOVIES_REQUEST } from '../../store/reducers/movie';

function Movie({location}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      movieType : location.state.type,
      path: location.state.path
    })
  }, [])
  return (
    <>
      <div>
        <Sub />

      </div>
    </>
  )
}

export default Movie
