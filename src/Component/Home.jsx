import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import SearchIcon from "@mui/icons-material/Search";
import ChatCart from "./Chatcard/ChatCart";
import MessageCart from "./MessageCart/MessageCart";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import { Menu, MenuItem } from "@mui/material";
import CreateGroup from "./Group/CreateGroup";
import { useDispatch, useSelector } from "react-redux";
import { logout, searchUser } from "../Redux/auth/action";
import { createChat, getUsersChat } from "../Redux/chat/action";
import {
  createSingleChat,
  findAllChatsByUserId,
} from "../services/chatService";
import { getChatsMessages, sendMessage } from "../services/messageService";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const MainContainer = styled.div`
  background-color: #00a884;
  height: 100px;
`;
const Container = styled.div`
  background-color: #d6dee5;
  width: 95%;
  height: 95%;
  margin: auto;
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  flex: 1;
  background-color: #fff;
`;
const RightContainer = styled.div`
  flex: 2;
  /* background-color: aqua; */
`;
const Header = styled.div`
  height: 60px;
  background-color: #d8e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
const UserName = styled.p``;
const Icons = styled.div`
  margin-right: 10px;
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
const Icons2 = styled.div`
  margin-right: 10px;
  flex: 1;
  text-align: right;
  background-color: #ebd9d9;
`;
const SearchInfo = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ChatConatiner = styled.div``;
const SearchBox = styled.div`
  position: relative;
  flex: 17;
`;
const Input = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  width: 95%;
  background-color: #e8edea;
  padding-left: 40px;
`;
const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ChatBGImage = styled.img`
  width: 50%;
  height: 50%;
  /* margin: auto; */
`;
const UserChat = styled.div``;
const ChatHeader = styled.div`
  display: flex;
  background-color: antiquewhite;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
const H1 = styled.h5``;

const MessageMainContainer = styled.div`
  padding: 10px;
  height: 85vh;
  overflow-y: scroll;
`;
const FooterContainer = styled.div`
  background-color: #e6e1e1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterIcons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const FooterInput = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  width: 85%;
  background-color: #e8edea;
`;

const Home = () => {
  const [querys, setQuerys] = useState(null);
  const [currentChat, setCurrentChat] = useState(false);
  const [currentUserChat, setCurrentUserChat] = useState(null);
  const [content, setContent] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isGroup, setIsGroup] = useState(false);
  const [userChats, setUserChats] = useState([]);
  const [currentChatMessages,setCurrentChatMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const { auth, chat, message } = useSelector((store) => store);

  // const { currentUser } = useSelector((store) => store.auth.signin) || {};

  console.log("currentUser", user.id);

  const handleClickOnChatCart = (item) => {
    setCurrentChat(true);
    createSingleChat(item, user.id)
      .then((chat) => console.log("Created Single Chat:", chat))
      .catch((error) => console.error("Error creating single chat:", error));
    
    setQuerys(null);
  };
  const openChat = (chat) => {
    setCurrentChat(true);
    console.log("chat item :- ", chat);
    setCurrentUserChat(chat);
  };

  const handleCreateNewMessage = async () => {

    const sendMessageRequest = {
      content: content,
      chatId: currentUserChat.id,
    };

    try {
      const newMessage = await sendMessage(sendMessageRequest, user.id);
      console.log("Sent message:", newMessage);

      // Handle the response as needed
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle the error as needed
    }
  };
  const handleBackToProfile = () => {
    setIsProfile(false);
  };

  const showProfile = () => {
    setIsProfile(true);
  };

  const handleSearch = (keyword) => {
    dispatch(searchUser(keyword));
  };

  useEffect(() => {
    // console.log("currentUserChat :- ",currentUserChat)
    if (currentUserChat && user) {
        getChatsMessages(currentUserChat.id, user.id)
            .then(messages => {
                console.log('Chat messages:', messages);
                setCurrentChatMessages(messages);
            })
            .catch(error => console.error('Error getting chat messages:', error));
    }
}, [currentUserChat]);

  useEffect(() => {
    findAllChatsByUserId(user.id)
      .then((chats) => {
        console.log("Chats by user ID:", chats);
        setUserChats(chats);
      })
      .catch((error) =>
        console.error("Error fetching chats by user ID:", error)
      );
  }, [2000]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCreateGrp = () => {
    setIsGroup(true);
  };
  const handleLogout = () => {
    console.log("clicked logout");
    dispatch(logout());
    console.log("isAuthenticated", isAuthenticated);
    window.location.reload();
  };
  useEffect(() => {
    console.log("isAuthenticated changed:", isAuthenticated);
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, []);

  return (
    <OuterContainer>
      <MainContainer></MainContainer>
      <Container>
        <LeftContainer>
          {isGroup && <CreateGroup />}
          {isProfile && <Profile handleBackToProfile={handleBackToProfile} />}
          {!isProfile && !isGroup && (
            <div>
              <Header>
                <UserInfo>
                  <ImageContainer onClick={showProfile}>
                    <Image
                      src={
                        user?.profilePic ||
                        "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                      }
                      alt="profileImage"
                    />
                  </ImageContainer>
                  <UserName>{user?.firstname || "Vishal01"}</UserName>
                </UserInfo>

                <Icons>
                  <DonutLargeIcon
                    style={{ marginRight: "5px" }}
                    onClick={() => navigate("/status")}
                  />
                  <MessageIcon style={{ marginRight: "5px" }} />
                  <div>
                    <MoreVertIcon
                      style={{ marginRight: "5px" }}
                      onClick={handleClick}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleCreateGrp}>
                        Create Group
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                </Icons>
              </Header>
              <SearchInfo>
                <SearchBox>
                  <SearchIcon
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "10px",
                      fontSize: "28px",
                      color: "#756e6e",
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="search here"
                    onChange={(e) => {
                      setQuerys(e.target.value);
                      handleSearch(e.target.value);
                    }}
                    value={querys}
                  />
                </SearchBox>
                <Icons>
                  <AlignHorizontalCenterIcon />
                </Icons>
              </SearchInfo>
              <ChatConatiner>
                {querys &&
                  auth.searchUser &&
                  auth.searchUser.length > 0 &&
                  auth.searchUser.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleClickOnChatCart(item.id)}
                    >
                      <hr />
                      <ChatCart item={item} />
                    </div>
                  ))}

                {userChats.length > 0 &&
                  !querys &&
                  userChats.map((item) => (
                    <div key={item.id} onClick={() => openChat(item)}>
                      <hr />
                      {item.group ? (
                        <ChatCart
                          name={item.chat_name}
                          userImg={
                            item.chat_image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460340.png"
                          }
                        />
                      ) : (
                        <ChatCart
                          // ischat={true}
                          name={
                            user.id === item.users[0].id
                              ? item.users[1].firstname
                              : item.users[0].firstname
                          }
                          userImg={
                            user.id === item.users[0].id
                              ? item.users[1].profilePic ||
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460340.png"
                              : item.users[0].profilePic ||
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460340.png"
                          }
                        />
                      )}
                    </div>
                  ))}
              </ChatConatiner>
            </div>
          )}
        </LeftContainer>
        <RightContainer>
          {/* chat default page */}
          {!currentChat && (
            <BackgroundImage>
              <ChatBGImage
                src="https://media.istockphoto.com/id/1409540606/vector/vector-contact-us-pattern-contact-us-seamless-background.jpg?s=612x612&w=0&k=20&c=3djpAIuo9fE9Mr4T7bLIUpEjqU7XaZk4wWt7aMUgU1o="
                alt="image"
                style={{ borderRadius: "none" }}
              />
              <H1>Whatsapp web</H1>
              <p>
                send and recieve messages without keeping your phone online .Use
                Whatsapp on up to new web i am reay to install it
              </p>
            </BackgroundImage>
          )}
          {/* message part when it's selected */}

          {currentChat && (
            <div>
              <UserChat>
                <ChatHeader>
                  <UserInfo>
                    <ImageContainer>
                      <Image
                        src={
                          user.id === currentUserChat.users[0].id
                          ? currentUserChat.users[1].profilePic ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460340.png"
                          : currentUserChat.users[0].profilePic ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460340.png"
                        }
                        alt="pic"
                      />
                    </ImageContainer>
                    <UserName>
                      { user.id === currentUserChat.users[0].id
                              ? currentUserChat.users[1].firstname
                              : currentUserChat.users[0].firstname || "user"}
                      
                    </UserName>
                  </UserInfo>
                  <Icons>
                    <SearchIcon />
                    <MoreVertIcon />
                  </Icons>
                </ChatHeader>
              </UserChat>
              {/* message section */}

              <MessageMainContainer>
                <div>
                  {currentChatMessages.length>0 && currentChatMessages.map((item, index) => (
                    <MessageCart
                      isReqUserMessage={item.user.id === user.id}
                      content={item.content}
                    />
                  ))}
                </div>
              </MessageMainContainer>
              {/* Footer part */}
              <FooterContainer>
                <FooterIcons>
                  <SentimentSatisfiedAltIcon />
                  <AttachFileIcon />
                </FooterIcons>
                <FooterInput
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type message"
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <FooterIcons>
                  <MicIcon />
                </FooterIcons>
              </FooterContainer>
            </div>
          )}
        </RightContainer>
      </Container>
    </OuterContainer>
  );
};

export default Home;
