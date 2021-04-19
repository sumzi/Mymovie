import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import { BackgroundImg, Detail } from "./Home.styled";
import { HOME_MOVIE_REQUEST } from "../../store/reducers/home";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";

function Home() {
  const dispatch = useDispatch();
  const { homeMovie, homeMovieLoading, homeMovieDone } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch({
      type: HOME_MOVIE_REQUEST,
    });
  }, []);

  return (
    <>
      {homeMovieDone ? (
        <BackgroundImg
          bgPath={`${IMAGE_BASE_URL}original${homeMovie.backdrop_path}`}
        >
          <Detail>
            {homeMovie.tagline ? <p>"{homeMovie.tagline}"</p> : <p></p>}
            <p>🎞 {homeMovie.title}</p>
          </Detail>
        </BackgroundImg>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
