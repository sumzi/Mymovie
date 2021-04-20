import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideosWrapper, VideoWrapper } from "./AboutVideos.styled";
import YouTube from 'react-youtube';
function AboutVideos() {
  const { movie } = useSelector((state) => state.about);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const opts = {
    width: '100%',

  }
  return (
    <VideosWrapper>
      <label>📹 동영상</label>
      <Slider {...settings}>
        {movie.videos.map((video) => (
          
          <VideoWrapper>
            <YouTube videoId={video.path} opts={opts}/>
          </VideoWrapper>
        ))}
      </Slider>
    </VideosWrapper>
  );
}

export default AboutVideos
