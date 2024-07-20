import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../Redux/auth/action";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: aliceblue;
`;

const FormContainer = styled.div`
  width: 30%;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.p`
  margin-bottom: 2px;
`;

const Input = styled.input`
  padding: 8px;
  outline: 2px solid green;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Text = styled.p``;
const StyledDiv = styled.div``;

const Signin = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth.signin) || {};


//   const token = JSON.parse(localStorage.getItem("User"))?.token;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit", inputData);
    await dispatch(login(inputData));

  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="Enter your email..."
              value={inputData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={inputData.password}
              onChange={handleChange}
            />
          </div>
          <StyledDiv>{/* Content for the div goes here */}</StyledDiv>
          <Button type="submit" variant="contained" style={{ backgroundColor: "green" }}>
            Sign In
          </Button>
        </Form>
        <FlexContainer>
          <Text>Create New Account</Text>
          <Button onClick={() => navigate("/signup")}>Signup</Button>
        </FlexContainer>
      </FormContainer>
    </Container>
  );
};

export default Signin;
