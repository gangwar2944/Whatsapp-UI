import React, { useState } from "react";
import { BsArrowLeft, BsCheck, BsCheck2, BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
const MainContainer = styled.div`
  background-color: #edf7ed;
`;
const TopContainer = styled.div`
  width: 100%;
  background-color: green;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  color: #fff;
`;
const BackIcon = styled.div`
  cursor: pointer;
  margin-bottom: 5px;
`;
const Para = styled.p`
  /* margin: 10px; */
`;
const Para2 = styled.p`
  margin: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* background-color: aliceblue; */
`;
const Label = styled.label`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const NameContainer = styled.div`
  background-color: #e2d2d2;
`;
const Username = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;
const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
  padding: 8px;
  border-radius: 10px;
  background-color: #f2f7f5;
`;
const Profile = ({ handleBackToProfile }) => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  const [username, setUsername] = useState(null);

  const handleFlag = () => {
    setFlag(!flag);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleUser = () => {
    // Handle user action, e.g., save the input value or perform other actions
    setFlag(true); // Set flag to true to switch back to the display mode
  };
  //   const handleBackToProfile = () => {
  //     console.log("handleNavigate called");
  //     navigate(-1);
  //   };

  return (
    <MainContainer>
      {/* top information  */}
      <TopContainer>
        <BackIcon onClick={handleBackToProfile}>
          <BsArrowLeft />
        </BackIcon>
        <Para>Profile</Para>
      </TopContainer>
      {/* image section */}
      <ImageContainer>
        <Label htmlFor="imgInput">
          <Image
            src="https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt=""
          />
        </Label>
        <input type="file" id="imgInput" style={{ display: "none" }} />
      </ImageContainer>

      {/* name section */}

      <NameContainer>
        <Para2>Your Name</Para2>
        {flag ? (
          <Username>
            <Para2 className="py-3">{username || "username"}</Para2>
            <BackIcon>
              <BsPencil onClick={handleFlag} className="cursor-pointer" />
            </BackIcon>
          </Username>
        ) : (
          <Username>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={handleUsername}
            />
            <BackIcon>
              <BsCheck2 onClick={handleUser} style={{ fontSize: "25px" }} />
            </BackIcon>
          </Username>
        )}
      </NameContainer>
      <div>
        <p>This is just description for the whatsapp</p>
      </div>
    </MainContainer>
  );
};

export default Profile;
