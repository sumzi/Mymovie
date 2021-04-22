import React from "react";
import { useSelector } from "react-redux";
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
        {movie.poster_path && <Poster
            src={`${IMAGE_BASE_URL}original${movie.poster_path}`}
            alt={movie.title}
        />}
        </PosterWrapper>
        <DetailWrapper>
          <div className='title'>{movie.title}</div>
          <div className='originalTitle'>
            {movie.originalTitle} , {movie.release_date}
          </div>
          <div className='genres'>
            {movie.genres} {movie.runtime}
          </div>
          <div className='rating'>⭐ {movie.rating}</div>
          
          <div className='unlike'>🤍</div>
          <div className='like'>❤</div>
        </DetailWrapper>
      </Wrapper>
      {movie.overview && <StoryWrapper>
        <label>📃 줄거리</label>
        <div className='story'>
          <div className="tagline">{movie.tagline}</div>
          <div className="overview">{movie.overview}</div>
        </div>
      </StoryWrapper>}
    </>
  );
}

export default AboutStory;
