import React, { useEffect } from "react";
import { IMAGE_BASE_URL } from "../../Config";
import { Detail, Description, Head, Background, Wrapper } from "./Home.styled";
import { HOME_MOVIE_REQUEST } from "../../store/reducers/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Slider from "react-slick";
import Footer from "../../components/Footer";

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
  const { movies, homeMovieDone } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch({
      type: HOME_MOVIE_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      {homeMovieDone ? (
        <Wrapper>
          <Head>
            <Slider {...settings}>
              {movies.map((movie, i) => (
                <Background
                  key={i}
                  bgPath={`${IMAGE_BASE_URL}original${movie.backdrop_path}`}
                >
                  <Detail>
                    <Link to={`/about/${movie.id}`}>
                      <div style={{ display: "inline-block" }}>
                        <div className="title">π {movie.title}</div>
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
          <Description>
            <p>
              TMDB APIλ₯Ό νμ©ν μν μ¬μ΄νΈλ‘,
              <br /> μνλ₯Ό κ²μν  μ μκ³  μνμ μμΈμ λ³΄λ₯Ό νμΈν  μ μμ΅λλ€.
              <br /> λν λ€μν λ°©μμΌλ‘ μνλ₯Ό λλ¬λ³Ό μ μμΌλ©°
              <br /> κ΄μ¬μλ μνλ₯Ό μ μ₯ν  μ μμ΅λλ€.
            </p>
          </Description>
          <Footer />
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
