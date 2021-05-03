import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Empty } from 'antd';
import { LikeWrapper, Header, Section,Wrapper } from './Like.styled';
import { LikeCard } from '../../components/Card';
import Footer from '../../components/Footer';

function Like() {
  const { movies } = useSelector(state => state.like);
  return (
    <Wrapper>
      <LikeWrapper>
        <Header>
          <div className='first'>Favorite movie</div><br/>
          <div className='second'>관심있는 영화를 클릭해 저장해보세요!</div>
        </Header>
        {movies.length > 0 ? (
          <Section>
            <Row gutter={[30, 30]}>
              {movies.map((movie) => {
                return <LikeCard key={movie.id} movie={movie} />;
              })}
            </Row>
          </Section>
        ) : (
          <div>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{padding:'100px'}}/>
          </div>
        )}
      </LikeWrapper>
      <Footer />
    </Wrapper>
  );
}

export default Like
