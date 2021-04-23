import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Wrapper,
  DetailWrapper,
  Poster,
  StoryWrapper,
  PosterWrapper,
  LikeButton,
} from "./AboutStory.styled";
import { IMAGE_BASE_URL } from "../../../Config";
import { UNLIKE_MOVIE_REQUEST, LIKE_MOVIE_REQUEST } from "../../../store/reducers/like";

function AboutStory() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.about);
  const { movies } = useSelector(state => state.like);
  const liked = movies.find((v) => v.id === movie.id);

  const unlikeButton = () => {
    dispatch({
      type: UNLIKE_MOVIE_REQUEST,
      data: movie.id,
    });
  };

  const likeButton = () => {
    dispatch({
      type: LIKE_MOVIE_REQUEST,
      data: {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path
      }
    });
  };

  return (
    <>
      <Wrapper>
        <PosterWrapper>
          {movie.poster_path && (
            <Poster
              src={`${IMAGE_BASE_URL}original${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </PosterWrapper>
        <DetailWrapper>
          <div className="title">{movie.title}</div>
          <div className="originalTitle">
            {movie.originalTitle} , {movie.release_date}
          </div>
          <div className="genres">
            {movie.genres}, {movie.runtime}, ⭐{movie.rating}
          </div>
          <LikeButton>
            <div>
              {liked ? (
                <div onClick={unlikeButton}>
                  {/* 이미 좋아하는 영화 */}
                  <div className="visible_like">❤</div>
                  <div className="hidden_like">💔</div>
                </div>
              ) : (
                <div onClick={likeButton}>
                  <div className="visible_like">🤍</div>
                  <div className="hidden_like" >❤</div>
                </div>
              )}
            </div>
          </LikeButton>
        </DetailWrapper>
      </Wrapper>
      {movie.overview && (
        <StoryWrapper>
          <label>📃 줄거리</label>
          <div className="story">
            <div className="tagline">{movie.tagline}</div>
            <div className="overview">{movie.overview}</div>
          </div>
        </StoryWrapper>
      )}
    </>
  );
}

export default AboutStory;
