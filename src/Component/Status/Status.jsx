import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai"; // Import AiOutlineClose from react-icons/ai
import StatusCart from "./StatusCart";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: aliceblue;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 255);
  display: flex;
`;
const ContainerLeft = styled.div`
  flex: 2;
  /* background-color: #000; */
  overflow-y: scroll;
`;
const ContainerRight = styled.div`
  flex: 6;
  background-color: #222;
`;
const CardContainer = styled.div``;
const Icon =styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`
const Status = () => {
    const navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <ContainerLeft>
          <CardContainer>
            <StatusCart />
          </CardContainer>
          <hr />
          <CardContainer>
            {[1, 1, 1, 1, 1, , 1, 1,1, 1, 1,1, 1].map(
              () => (
                <StatusCart />
              )
            )}
          </CardContainer>
        </ContainerLeft>
        <ContainerRight></ContainerRight>
      </Container>
      <Icon onClick={()=>navigate(-1)}>
      <AiOutlineClose /> {/* Include AiOutlineClose here */}
      </Icon>
    </MainContainer>
  );
};

export default Status;
