import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import SelectedMember from "./SelectedMember";
import ChatCart from "../Chatcard/ChatCart";
import { useNavigate } from "react-router-dom";
import NewGroup from "./NewGroup";

const HeaderInfo = styled.div`
  width: 100%;
  height: 100px;
  background-color: #086f27;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  padding: 4px 3px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  color: #000;
  padding: 2px;
  width: 93%;
  &::placeholder {
    color: #ccc;
  }
`;

const ScrollableContainer = styled.div`
  background-color: #fff;
  overflow-y: scroll;
  height: 50.2vh;
`;
const GrpMember = styled.div`
  width: 98%;
`;

const ParticipantContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const BottomContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  /* background-color: #4a5568; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GreenButton = styled.div`
  background-color: #48bb78; /* Green-600 color */
  border-radius: 9999px; /* Use a large value for a rounded shape */
  padding: 1rem; /* Adjust as needed */
  cursor: pointer;
`;

const ArrowIcon = styled(BsArrowRight)`
  color: white;
  font-weight: bold;
  font-size: 3rem;
`;
const CreateGroup = () => {
  const [newGroup, setNewGroup] = useState(false);
  const [query, setQuery] = useState(""); // Fixed the state variable name
  const [groupMember, setGroupMember] = useState(new Set());
  const navigate = useNavigate();

  const handleRemoveMember = (item) => {
    groupMember.delete(item);
    setGroupMember(new Set(groupMember)); // Create a new Set to trigger state update
  };

  const handleSearch = (value) => {
    // Handle search logic here
  };

  return (
    <Wrapper>
      {!newGroup && (
        <div className="relative bg-white py-4 px-3">
          <HeaderInfo>
            <BsArrowLeft />
            <p>Add Group Participant</p>
          </HeaderInfo>
          <ParticipantContainer>
            {groupMember.size > 0 &&
              Array.from(groupMember).map((item) => (
                <SelectedMember
                  key={item.id}
                  handleRemoveMember={() => handleRemoveMember(item)}
                  member={item}
                />
              ))}
            <SearchInput
              type="text"
              onChange={(e) => {
                handleSearch(e.target.value);
                setQuery(e.target.value);
              }}
              placeholder="Search user"
              value={query}
            />
          </ParticipantContainer>
          <ScrollableContainer>
            {query &&
              [1, 1, 1, 1, 1].map((item) => (
                <GrpMember
                  key={item?.id}
                  onClick={() => {
                    groupMember.add(item);
                    setGroupMember(groupMember);
                    setQuery("");
                  }}
                >
                  <hr />
                  <ChatCart />
                </GrpMember>
              ))}
          </ScrollableContainer>
          <BottomContainer>
            <GreenButton onClick={() => setNewGroup(true)}>
              <ArrowIcon />
            </GreenButton>
          </BottomContainer>
        </div>
      )}
          {newGroup && <NewGroup/>}
    </Wrapper>
  );
};

export default CreateGroup;
