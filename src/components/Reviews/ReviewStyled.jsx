import styled from 'styled-components';

const ReviewStyle = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 30px;
  color: white;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
}
`;

const ReviewAuthor = styled.div`
  display: flex;
  min-width: 200px;
  padding-left: 20px;
  flex-direction: column;
  color: white;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
}
`;

const ReviewContent = styled.div`
  display: flex;
  color: white;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
}
`;

export { ReviewStyle, ReviewAuthor, ReviewContent };
