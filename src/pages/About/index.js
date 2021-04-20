import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DETAIL_MOVIE_REQUEST } from "../../store/reducers/about";
import Loading from "../../components/Loading";
import { Row } from 'antd';
import { AboutStory, AboutCasts, AboutImages, AboutVideos } from '../../components/About/';

function About(props) {
  const dispatch = useDispatch();
  const { detailMovieLoading } = useSelector((state) => state.about);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIE_REQUEST,
      data: movieId,
    });
  }, []);
  
  return (
    <>
      {detailMovieLoading ? (
        <Loading />
      ) : (
        <div>
          <Row>
            <AboutStory />
          </Row>
          <Row>
            <AboutCasts/>
          </Row>
          <Row>
            <AboutImages/>
          </Row>
          <Row>
            <AboutVideos/>
          </Row>
        </div>
      )}
    </>
  );
}

export default About;
