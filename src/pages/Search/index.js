import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_MOVIES_REQUEST,
  INIT_SEARCH_MOVIES,
} from "../../store/reducers/search";
import { Row } from "antd";
import "antd/dist/antd.css";
import { Header, InputWrapper, Wrapper, IndexWrapper } from "./Search.styled";
import { SearchCard } from "../../components/Card";
import Footer from "../../components/Footer";

function Search() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.search);
  const [word, setWord] = useState("");

  useEffect(() => {
    if (word !== "") {
      dispatch({
        type: SEARCH_MOVIES_REQUEST,
        data: word,
      });
    } else {
      dispatch({
        type: INIT_SEARCH_MOVIES,
      });
    }
  }, [dispatch, word]);

  const onChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <Wrapper>
      <Header>
        <InputWrapper>
          <input
            placeholder="Search movie title..."
            value={word}
            onChange={onChange}
          />
        </InputWrapper>
        <IndexWrapper>
          <Row>
            {movies.map((movie, i) => (
              <SearchCard key={i} movieId={movie.id} title={movie.title} />
            ))}
          </Row>
        </IndexWrapper>
      </Header>
      <Footer />
    </Wrapper>
  );
}

export default Search;
