import React from 'react';
import { useSelector } from 'react-redux';
import Nodata from '../../components/Nodata';
import { Row } from 'antd';
import { LikeWrapper, Header, Section,Wrapper } from './Like.styled';
import { LikeCard } from '../../components/Card';
import Footer from '../../components/Footer';

function Like() {
  const { movies } = useSelector(state => state.like);
  return (
    <Wrapper>
      <LikeWrapper>
        <Header>좋아하는 영화</Header>
        {movies.length > 0 ? (
          <Section>
            <Row gutter={[20, 30]}>
              {movies.map((movie) => {
                return <LikeCard key={movie.id} movie={movie} />;
              })}
            </Row>
          </Section>
        ) : (
          <Nodata />
        )}
      </LikeWrapper>
      <Footer />
    </Wrapper>
  );
}

export default Like
