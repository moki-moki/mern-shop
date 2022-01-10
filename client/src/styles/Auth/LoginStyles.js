import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputCotnainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 50%;
  padding: 0.6em;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  transition: 0.2s ease all;
  margin: 0.7em 0;

  &:valid {
    border-bottom: 1px solid #31cb00;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  padding: 0.7em;
  margin: 1em 0;
  font-weight: bold;
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.cardBg};
  }
`;

export const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.hover};
`;
