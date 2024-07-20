import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem; /* Assuming 3 is the default spacing unit in your design system */
  background-color: #222;
  cursor: pointer;
`;

const StyledName = styled.div`
  margin: 0.5rem 1rem; /* Assuming 1 is half of the default spacing unit */
  color: white;
`;

const StyledImage = styled.img`
  height: 1.75rem; /* Assuming 7 is the default spacing unit */
  width: 1.75rem; /* Assuming 7 is the default spacing unit */
  @media (min-width: 768px) {
    /* Assuming 768 is the breakpoint for lg screens */
    height: 2.5rem; /* Assuming 10 is the default spacing unit for lg screens */
    width: 2.5rem; /* Assuming 10 is the default spacing unit for lg screens */
  }
  border-radius: 50%;
`;

// Your JSX
const StatusCart = () => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate("/status/{userId}")
    }
    return(
  <StyledCard onClick={handleNavigate}>
    
    <StyledImage
      src='https://images.unsplash.com/photo-1703088066010-af61bb552da4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt=''
    />
    <div>
      <StyledName>
        <p>pablo panday</p>
      </StyledName>
    </div>
  </StyledCard>)
};

export default StatusCart;
