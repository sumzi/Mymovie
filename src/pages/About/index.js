import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DETAIL_MOVIE_REQUEST } from "../../store/reducers/about";
import Loading from "../../components/Loading";
import { Row } from 'antd';
import { AboutStory, AboutCasts, AboutImages, AboutVideos } from '../../components/About/';
import { AboutWrapper, BackgroundImg, Wrapper } from './About.styled';
import { IMAGE_BASE_URL } from '../../Config';
import Footer from '../../components/Footer';

function About(props) {
  const dispatch = useDispatch();
  const { detailMovieLoading, movie, detailMovieDone } = useSelector((state) => state.about);
  const { darkMode } = useSelector(state => state.home);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIE_REQUEST,
      data: movieId,
    });
  }, [dispatch, movieId]);
  
  return (
    <Wrapper>
      {detailMovieLoading ? (
        <Loading />
      ) : (
        <>
          <AboutWrapper>
            <Row>
              <AboutStory />
            </Row>
            <Row>{movie.casts.length > 0 && <AboutCasts />}</Row>
            <Row>{movie.images.length > 0 && <AboutImages />}</Row>
            <Row>{movie.videos.length > 0 && <AboutVideos />}</Row>

            {detailMovieDone && <BackgroundImg mode={darkMode} bgPath={movie.images[1]?`${IMAGE_BASE_URL}original${movie.images[1]}`:`${IMAGE_BASE_URL}original${movie.backdrop_path}`} />} 
          
          </AboutWrapper>
          
          <Footer/>
          </>
      )}
    </Wrapper>
  );
}

export default About;
