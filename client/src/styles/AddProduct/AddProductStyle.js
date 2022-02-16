import styled from "styled-components";

export const MainContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled.div`
  width: 60%;
  background: ${({ theme }) => theme.colors.cardBg};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 0.5em;
  border-radius: 10px;
`;

export const AddProductInput = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em;
  margin: 0.5em 0;
`;

export const PictureUploadBtn = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em;
  margin: 0.5em 0;
`;

export const SelectCategory = styled.select`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em;
`;
