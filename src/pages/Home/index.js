import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../key';
import { API_URL, IMAGE_BASE_URL } from '../../Config';
import { Sub } from '../../components/Nav';
import { BackgroundImg } from './Home.styled';

function Home() {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    const num = Math.floor(Math.random()*20);
    // const num = 2;
    async function getMovie() {
      try {
        const movies = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR`);
        console.log(movies.data.results[num]);
        setMovie(movies.data.results[num]);
        const about = await axios.get(`${API_URL}movie/${movie.id}?api_key=${API_KEY}&language=ko-KR`);
        console.log(about.data);
      }catch(error){
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <BackgroundImg bgPath={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}>
        <Sub />
        <div>
          하하ㅏㅎ
        </div>
      </BackgroundImg>
    </>
  )
}

export default Home
