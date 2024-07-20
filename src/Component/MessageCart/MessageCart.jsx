import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
  max-width: 50%;
  /* background-color: #c6dac5; */
  background-color: ${props => (props.isReqUserMessage ? '#c6dac5' : '#fff')};;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  margin-left: ${props => (props.isReqUserMessage ? 'auto' : '0')};
  margin-right: ${props => (props.isReqUserMessage ? '0' : 'auto')};
  text-align: ${props => (props.isReqUserMessage ? 'right' : 'left')};
`;
const Para = styled.p`
    border-radius: 8px;
`
const MessageCart = ({ isReqUserMessage, content }) => {
  return (
    <Contain isReqUserMessage={isReqUserMessage}>
      <Para>{content}</Para>
    </Contain>
  );
};

export default MessageCart;
