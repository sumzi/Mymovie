import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../key';
import { API_URL, IMAGE_BASE_URL } from '../../Config';
import styled from 'styled-components';


function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMovie() {
      await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
      .then((res)=>console.log(res.data.results));
    };
    getMovie();
  }, []);

  return (
    <div>
      Home
    </div>
  )
}

export default Home
