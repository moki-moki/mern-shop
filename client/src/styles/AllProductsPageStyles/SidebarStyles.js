import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 15%;

  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 0.5em;
  margin: 0 1em;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export const SidebarCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SidebarCategoryCheckboxes = styled.input`
  margin: 0.5em 0;

  &:focus {
    outline: none;
  }
`;

export const CheckboxesLabels = styled.label`
  margin-left: 0.3em;
`;

export const SidebarCategorySortContainer = styled.div`
  margin: 0.3em 0;
`;

export const SidebarSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 0.5em;

  &:checked {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
