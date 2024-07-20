import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
import styled from "styled-components";

const NewGroupContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  background-color: #008069;
  padding:10px;
  color: #fff;
`;

const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const ImageLabel = styled.label`
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }

  .upload-indicator {
    position: absolute;
    top: 5rem;
    left: 6rem;
  }
`;

const InputFile = styled.input`
  display: none;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
`;

const GroupSubjectInput = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 2px solid #008069;
  background: transparent;
  padding: 2px;
`;
const StyledContainer = styled.div`
  padding: 10px;
  background-color: #c4cbd7; /* Change to the desired color or use a variable */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: #0c977d;
  border: none;
  border-radius: 50%;
  padding: 16px;
`;

const StyledIcon = styled(BsCheck2)`
  color: white;
  font-weight: bold;
  font-size: 3rem;
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

const NewGroup = () => {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [groupName, setGroupName] = useState("");

  return (
    <NewGroupContainer>
      <Header>
        <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
        <p className="text-xl font-semibold">New Group</p>
      </Header>
      <div className="text-white pt-16 px-10 pb-5">
        <ImageUploadWrapper>
          <ImageContainer>
            <Label htmlFor="imgInput">
              <Image
                src="https://images.unsplash.com/photo-1702213403689-5fcbb4efbd3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </Label>
            <input type="file" id="imgInput" style={{ display: "none" }} />
          </ImageContainer>
           {isImageUploading && (
              <CircularProgress className="upload-indicator" />
            )}
        </ImageUploadWrapper>
        <InputWrapper>
          <GroupSubjectInput
            placeholder="Group Subject"
            value={groupName}
            type="text"
            onChange={(e) => setGroupName(e.target.value)}
          />
        </InputWrapper>
        {groupName && (
          <StyledContainer>
            <StyledButton>
              <StyledIcon />
            </StyledButton>
          </StyledContainer>
        )}
      </div>
    </NewGroupContainer>
  );
};
export default NewGroup;
