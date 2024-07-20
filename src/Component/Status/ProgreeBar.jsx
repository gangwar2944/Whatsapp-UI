import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  height: 4px;
  margin-top: 1rem;
`;

const Progressbar = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0.5;
  margin: 1rem;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`;

const Progress = styled.div`
  height: 100%;
  background-color: rgb(39, 39, 255);
  border-radius: 4px;
  width: ${(props) => `${props.progress}%`};
  /* transition:all .3s ease;  */
`;

const ProgressBar = ({ index, activeIndex, duration }) => {
  const isActive = index === activeIndex;
  //   console.log("index & activeIndex" , isActive)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(intervalId);
        return prev;
      });
    }, duration / 100);

    // Cleanup the interval on component unmount
  }, [duration, activeIndex]);

  useEffect(() => {
    setProgress(0); // Reset progress when activeIndex changes
  }, [activeIndex]);

  return (
    <ProgressBarContainer>
      <Progressbar isActive={isActive}>
        <Progress progress={progress} duration={duration} />
      </Progressbar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
