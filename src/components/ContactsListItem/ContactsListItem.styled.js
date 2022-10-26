import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-family: monospace;
  font-weight: 600;
  margin-right: 15px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 8px;
  }
`;

export const Number = styled.p`
  font-size: 20px;
  font-family: monospace;
  font-weight: 600;
  margin-right: 20px;
`;

export const ButtonDelete = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-family: monospace;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #9173ec;
  border: 1px solid #571dac;
  color: #571dac;
  text-shadow: rgb(254 252 252 / 50%) 0px 1px 0px;
  background-color: #98ff98;
  border: 1px solid #158d34;
  -moz-box-shadow: inset 0px 0px 1px rgba(26, 154, 72, 1);
  -webkit-box-shadow: inset 0px 0px 1px rgb(26 154 72);
  box-shadow: inset 0px 0px 1px rgb(26 154 72);
  background-image: -o-linear-gradient(
    90deg,
    rgb(112, 201, 101) 0%,
    rgb(182, 237, 176) 100%
  );
  color: #1d7819;
  text-shadow: rgb(254 252 252 / 50%) 0px 1px 0px;
  transition: background-color 350ms cubic-bezier(0.19, 1, 0.22, 1),
    background-image 350ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    background-color: #a7ed9e;
    background-image: -o-linear-gradient(
      90deg,
      rgb(138, 211, 129) 0%,
      rgb(204, 237, 200) 100%
    );
  }
`;
