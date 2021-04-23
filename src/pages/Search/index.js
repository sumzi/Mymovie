import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_MOVIES_REQUEST, INIT_SEARCH_MOVIES } from '../../store/reducers/search';
import Nodata from '../../components/Nodata';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import { SearchWrapper, Header, Section, InputWrapper } from './Search.styled';
import { SearchCard } from '../../components/Card';

function Search() {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.search);
  const [keyword, setKeyword] = useState('마블');
  const [word, setWord] = useState('');

  useEffect(() => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
      data: '마블',
    });
    return () => {
      dispatch({
        type: INIT_SEARCH_MOVIES,
      });
    };
  }, []);

  const changeKeyword = (e) => {
    setWord(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      if (word) {
        dispatch({
          type: SEARCH_MOVIES_REQUEST,
          data: word,
        });
        setWord("");
        setKeyword(word);
      }
    }
  };
  return (
    <SearchWrapper>
      <Header>
        <InputWrapper><input type='text' placeholder='Search...' onChange={changeKeyword} value={word} onKeyPress={keyPress} /></InputWrapper>
        { keyword && <div>"{keyword}" 검색 결과</div>}
      </Header>
      {keyword ? <Section>
        <Row gutter={[40,40]}>
          {movies.map((movie) => {
            return (
              <SearchCard key={movie.id} movie={movie}/>
            );
          })}
        </Row>
      </Section>:<Nodata />}
    </SearchWrapper>
    
  )
}

export default Search;
