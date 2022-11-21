import styled from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 2px 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 14px;
  text-transform: capitalize;

  &:hover {
    background-color: #00a2ff;
  }
`;

export const FeedbackBar = styled.ul`
  padding-bottom: 30px;
  width: 170px;
  display: flex;
  justify-content: space-around;
`;
