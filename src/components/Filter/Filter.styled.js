import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
`;

export const FilterInput = styled.input`
  background-color: rgba(0, 212, 255, 12);
  display: block;
  padding-left: 10px;

  width: 100%;
  height: 30px;
  border-radius: 5px;

  font-size: 15px;
  font-family: monospace;
  font-weight: 600;

  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    border-color: #98ff98;
  }
`;
