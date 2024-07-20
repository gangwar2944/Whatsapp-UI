import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const StyledSelectedMember = styled.div`
  display: flex;
  align-items: center;
  background-color: #718096; /* You can replace this color with your desired background color (bg-slate-300) */
  border-radius: 9999px; /* Use a large enough value for a rounded effect */
  width: fit-content;
  color: #fff;
  /* margin-right: 5px; */
  img {
    width: 2rem; /* Adjust the width as needed */
    height: 2rem; /* Adjust the height as needed */
    border-radius: 50%;
  }

  p {
    padding: 0 0.5rem; /* Adjust the padding as needed */
  }

  svg {
    cursor: pointer;
  }
`;

const SelectedMember = ({ handleRemoveMember, member }) => {
  return (
    <StyledSelectedMember>
      <img
        src="https://cdn.pixabay.com/photo/2023/05/10/18/05/blackbird-7984650_640.jpg"
        alt=""
      />
      <p>{member.username || "vishal"}</p>
      <AiOutlineClose onClick={handleRemoveMember} style={{marginRight:"5px"}}/>
    </StyledSelectedMember>
  );
};

export default SelectedMember;
