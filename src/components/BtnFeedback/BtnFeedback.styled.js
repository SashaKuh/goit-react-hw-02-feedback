import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 11%;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;