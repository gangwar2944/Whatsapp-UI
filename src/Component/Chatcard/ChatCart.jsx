import { Style } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    margin: 10px;
    width: 98%;
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const CenterContainer = styled.div`
    flex: 4;
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
`
const LeftContainer = styled.div`
    flex: 1;
`
const MessageContainer = styled.div`
    flex: 1;
`
const Username = styled.p`
    
`
const Message = styled.span`
`
const Count = styled.span`
background-color: #70cbc1;
width: 30px;
height: 30px;
border-radius: 50%;
text-align: center;
`
const ChatCart = (props) => {
    const {name,userImg} = props;
 console.log("name",name);
 console.log("userImg",userImg);
  return (
    <Container>
        <ImageContainer>
            <Image src={ userImg ||'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'} alt='pic'/>
        </ImageContainer>
        <CenterContainer>
            <Username>
               {name || "user"}
            </Username>
            <MessageContainer>
               <Message>this is message</Message>
            </MessageContainer>
        </CenterContainer>
        <RightContainer>
               <Message>12:30 PM</Message>
               <Count>4</Count>
        </RightContainer>
        <LeftContainer>

        </LeftContainer>
    </Container>
  )
}

export default ChatCart