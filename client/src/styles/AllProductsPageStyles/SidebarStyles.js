import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 20%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 1em;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SidebarCategoryContainer = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SidebarCategoryCheckboxes = styled.input`
  margin: 0.5em;

  &:focus {
    outline: none;
  }
`;
