import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSignUpButton = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  border: none;
  border-radius: 8px;
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: var(--color-brand-700);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid var(--color-brand-700);
    outline-offset: 3px;
  }
`;

function SignUpButton() {
  const navigate = useNavigate();

  return (
    <StyledSignUpButton onClick={() => navigate("/signUp")}>
      Sign up
    </StyledSignUpButton>
  );
}

export default SignUpButton;
