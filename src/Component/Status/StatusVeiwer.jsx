import React, { useState, useEffect } from 'react';
import { stories } from './DummayStory'; // Replace with your actual data source
import styled from 'styled-components';
import ProgressBar from './ProgreeBar';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
position: relative;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* background-color: #fff; */

`;

const ImageContainer = styled.div`
  width: 60vw;
  height: 90vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 10px;

  width: 60vw;
  display: flex;
  justify-content: center;
`;
const Icon =styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`
const StatusViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeStatus, setActiveStatus] = useState(0);
  const navigate = useNavigate();

  const handleNextIndex = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setActiveStatus(activeStatus + 1);
    } else {
      setCurrentIndex(0);
      setActiveStatus(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextIndex();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <MainContainer>
      <Container>
        <ImageContainer>
          <Image src={stories?.[currentIndex]?.img} alt="pic" />
          <ProgressBarContainer>
          {stories.map((item, index) => (
            <ProgressBar
              key={index}
              duration={2000}
              index={index}
              activeIndex={activeStatus}
            />
          ))}
        </ProgressBarContainer>
        </ImageContainer>
       
      </Container>
       <Icon onClick={()=>navigate(-1)}>
        <AiOutlineClose style={{color:"#fff"}}/>
        </Icon>
    </MainContainer>
  );
};

export default StatusViewer;
