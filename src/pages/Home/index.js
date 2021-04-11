import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../key';
import { API_URL, IMAGE_BASE_URL } from '../../Config';
import styled from 'styled-components';

const BgImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-size: cover;
  height: 100vh;
  background: ${({ bgPath }) => `url(${bgPath}) center no-repeat`};
`;




function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const num = Math.floor(Math.random()*20);
    async function getMovie() {
      try {
        const movies = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR`);
        console.log(movies.data.results[num]);
        setMovie(movies.data.results[num]);
      }catch(error){
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <BgImg bgPath={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}/>
    </>
  )
}

export default Home
