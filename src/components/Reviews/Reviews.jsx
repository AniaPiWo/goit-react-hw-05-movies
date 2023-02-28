import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from './Review';
import { getMovieReviewsByID } from 'utils/MoviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByID(movieId).then(rev => setReviews(rev));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(
          ({ author, content, updated_at, url, id, author_details }) => (
            <Review
              key={id}
              nickname={author_details.username}
              author={author}
              text={content}
              postTime={updated_at}
              link={url}
            />
          )
        )
      ) : (
        <p
          style={{
            fontSize: '30px',
            fontFamily: 'Roboto',
            textAlign: 'center',
            padding: '30px',
          }}
        >
          Unfortunately, this movie has no reviews yet 😞
        </p>
      )}
    </div>
  );
};

export default Reviews;
