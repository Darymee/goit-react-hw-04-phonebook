import styled from 'styled-components';

export const FormWrap = styled.div`
  border: 2px solid black;
  padding: 30px;
  background-color: white;
  box-shadow: 10px 10px 53px -22px rgba(0, 0, 0, 0.75);
  width: 230px;
  margin-bottom: 30px;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 0.22314863445378152) 0%,
    rgba(0, 212, 255, 0.506061799719888) 42%,
    rgba(0, 212, 255, 0.20073967086834732) 100%
  );
  box-shadow: 10px 10px 108px 32px rgba(71, 71, 71, 0.79);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    fill: #98ff98;

    margin-right: 10px;
    width: 28px;
    height: 28px;

    top: 50%;
    left: 7px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: monospace;
  position: absolute;
  top: -17px;
  left: 50px;
  background-color: white;
  padding: 4px 4px;
  border-radius: 10px;
  background-color: transparent;
  color: #98ff98;
  text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0),
    1px 0px 0 rgb(0, 0, 0), -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0),
    1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0);
`;

export const Input = styled.input`
  font-size: 13px;
  font-family: monospace;
  font-weight: 600;
  background-color: rgba(0, 212, 255, 12);
  padding-left: 10px;
  display: block;

  width: 100%;
  height: 30px;
  border-radius: 5px;
  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    border-color: #98ff98;
  }
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-family: monospace;
  width: 120px;
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
