import React from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardWrapper } from "./LikeCard.styled";
import { UNLIKE_MOVIE_REQUEST } from "../../../store/reducers/like";
import { IMAGE_BASE_URL } from "../../../Config";
import { HeartFilled } from "@ant-design/icons";
import "antd/dist/antd.css";

function LikeCard({ movie }) {
  const dispatch = useDispatch();

  const likeClick = () => {
    dispatch({
      type: UNLIKE_MOVIE_REQUEST,
      data: movie.id,
    });
  };

  return (
    <Col xs={24} md={12} lg={8}>
      <CardWrapper>
        <Card
          hoverable
          cover={
            <Link to={`/about/${movie.id}`}>
              <img
                alt={movie.title}
                src={`${IMAGE_BASE_URL}w500${movie.backdrop_path}`}
              />
            </Link>
          }
          actions={[
            <HeartFilled
              key="like"
              onClick={likeClick}
              style={{ color: "red" }}
            />,
          ]}
        >
          <div>{movie.title}</div>
        </Card>
      </CardWrapper>
    </Col>
  );
}

export default LikeCard;
