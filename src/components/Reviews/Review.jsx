import PropTypes from 'prop-types';
import { ReviewStyle, ReviewAuthor, ReviewContent } from './ReviewStyled';

export const Review = ({ author, text, postTime, link, nickname }) => {
  const datePost = new Date(postTime).toLocaleDateString();
  return (
    <ReviewStyle>
      <ReviewAuthor>
        <span>{author} aka </span>
        <a href={link}>{nickname}</a>
        <p>{datePost}</p>
      </ReviewAuthor>
      <ReviewContent>
        <p>{text}</p>
      </ReviewContent>
    </ReviewStyle>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  nickname: PropTypes.string,
  postTime: PropTypes.string,
};
