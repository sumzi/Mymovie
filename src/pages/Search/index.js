import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_MOVIES_REQUEST, INIT_SEARCH_MOVIES } from '../../store/reducers/search';
import { Row } from 'antd';
import { SearchWrapper, Header, Section, InputWrapper } from './Search.styled';
import { SearchCard } from '../../components/Card';

function Search() {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.search);
  const [keyword, setKeyword] = useState('');
  const [word, setWord] = useState('');

  useEffect(() => {
    return () => {
      dispatch({
        type: INIT_SEARCH_MOVIES,
      });
    };
  }, [])

  const changeKeyword = (e) => {
    setWord(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter' ) {
      if (word === '') {
        // 경고
      }
      else {
        dispatch({
          type: SEARCH_MOVIES_REQUEST,
          data: word,
        });
        setWord('');
        setKeyword(word);
      }
    }
  }

  return (
    <SearchWrapper>
      <Header>
        <InputWrapper><input type='text' placeholder='Search...' onChange={changeKeyword} value={word} onKeyPress={keyPress} /></InputWrapper>
        { keyword && <div>"{keyword}" 검색 결과</div>}
      </Header>
      <Section>
        <Row gutter={[40,40]}>
          {movies.map((movie,i) => {
            return (
              <SearchCard key={i} movie={movie}/>
            );
          })}
        </Row>
      </Section>
    </SearchWrapper>
    
  )
}

export default Search
