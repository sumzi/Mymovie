import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DETAIL_MOVIE_REQUEST } from "../../store/reducers/about";
import Loading from "../../components/Loading";
import { IMAGE_BASE_URL } from "../../Config";
import { Row } from 'antd';
import { Casts, Image, Video } from '../../components/About';
import {
  DetailWrapper,
  Block,
  Poster,
  Detail,
  Story,
  PosterWrapper,
} from "./About.styled";

function About(props) {
  const dispatch = useDispatch();
  const { movie, detailMovieLoading } = useSelector((state) => state.about);
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
        <DetailWrapper>
          <Block>
            <PosterWrapper>
              <Poster
                src={`${IMAGE_BASE_URL}original${movie.poster_path}`}
                alt={movie.title}
              />
            </PosterWrapper>
            <Detail>
              <div>{movie.title}</div>
              <div>
                {movie.originalTitle} , {movie.release_date}
              </div>
              <div>
                {movie.genres} {movie.runtime}
              </div>
              <div>{movie.rating}</div>
            </Detail>
          </Block>
          <Story>
            <p>줄거리</p>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
          </Story>
          <Row>
            <Casts/>
          </Row>
          <Row>
            <Image/>
          </Row>
          <Row>
            <Video/>
          </Row>
        </DetailWrapper>
      )}
    </>
  );
}

export default About;
