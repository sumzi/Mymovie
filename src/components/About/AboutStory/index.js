import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DETAIL_MOVIE_REQUEST } from "../../../store/reducers/about";
import Loading from "../../Loading";
import {
  Wrapper,
  DetailWrapper,
  Poster,
  StoryWrapper,
  PosterWrapper,
} from "./AboutStory.styled";
import { IMAGE_BASE_URL } from "../../../Config";

function AboutStory() {
  const { movie } = useSelector((state) => state.about);

  return (
    <>
      <Wrapper>
        <PosterWrapper>
        <Poster
            src={`${IMAGE_BASE_URL}original${movie.poster_path}`}
            alt={movie.title}
        />
        </PosterWrapper>
        <DetailWrapper>
          <div>{movie.title}</div>
          <div>
            {movie.originalTitle} , {movie.release_date}
          </div>
          <div>
            {movie.genres} {movie.runtime}
          </div>
          <div>{movie.rating}</div>
        </DetailWrapper>
      </Wrapper>
      <StoryWrapper>
        <label>📃 줄거리</label>
        <div className='story'>
          <div className="tagline">{movie.tagline}</div>
          <div className="overview">{movie.overview}</div>
        </div>
      </StoryWrapper>
    </>
  );
}

export default AboutStory;
