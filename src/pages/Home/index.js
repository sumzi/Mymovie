import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import { Detail, Section, Footer, Head, Background } from "./Home.styled";
import { HOME_MOVIE_REQUEST } from "../../store/reducers/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { GithubOutlined } from "@ant-design/icons";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: (dots) => (
    <div
      style={{
        padding: "50px",
      }}
    >
      <ul style={{ margin: "0px" }}>{dots}</ul>
    </div>
  ),
};

function Home() {
  const dispatch = useDispatch();
  const { homeMovie, homeMovieDone } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch({
      type: HOME_MOVIE_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      {homeMovieDone ? (
        <>
          <Head>
            <Slider {...settings}>
              {homeMovie.map((movie) => (
                <Background
                  bgPath={`${IMAGE_BASE_URL}original${movie.backdrop_path}`}
                >
                  <Detail>
                    <Link to={`/about/${movie.id}`}>
                      <div style={{ display: "inline-block" }}>
                        <div className="title">🎞 {movie.title}</div>
                        <div className="original_title">
                          {" "}
                          {movie.original_title}
                        </div>
                      </div>
                    </Link>
                  </Detail>
                </Background>
              ))}
            </Slider>
          </Head>
          <Section>검색</Section>
          <Section>
            <p>
              TMDB API를 활용한 영화 사이트로,
              <br /> 영화를 검색할 수 있고 영화의 상세정보를 확인할 수 있습니다.
              <br /> 또한 다양한 방식으로 영화를 둘러볼 수 있으며
              <br /> 관심있는 영화를 저장할 수 있습니다.
            </p>
          </Section>
          <Footer>
            <a href="https://github.com/sumzi/Movie">
              <GithubOutlined/> sumzi
            </a>
          </Footer>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
