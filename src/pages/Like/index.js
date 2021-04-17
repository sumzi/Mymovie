import React from 'react';
import { useSelector } from 'react-redux';
import { Empty  } from 'antd';


function Like() {
  const { likes } = useSelector(state => state.movie)
  return (
    <div>
      {/*  likes 가 없으면 ㅎㅎ */}
      {likes?(<div>있네여</div>)
      :<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      
    </div>
  )
}

export default Like
