import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import { BackgroundImg, Detail,FooterWrapper } from "./Home.styled";
import { HOME_MOVIE_REQUEST } from "../../store/reducers/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import { GithubOutlined } from '@ant-design/icons';

function Home() {
  const dispatch = useDispatch();
  const { homeMovie, homeMovieDone } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch({
      type: HOME_MOVIE_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      {homeMovieDone ? (
        <BackgroundImg
          bgPath={`${IMAGE_BASE_URL}original${homeMovie.backdrop_path}`}
        >
          <Detail>
            {homeMovie.tagline ? <p>"{homeMovie.tagline}"</p> : <p></p>}
            <p>
              <Link to={`/about/${homeMovie.id}`} style={{color: 'white'}}>🎞 {homeMovie.title}</Link>
            </p>
          </Detail>
          <FooterWrapper>
            <a href='https://github.com/sumzi/Movie'><GithubOutlined /></a>
            <label>sumzi</label>
          </FooterWrapper>
        </BackgroundImg>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
