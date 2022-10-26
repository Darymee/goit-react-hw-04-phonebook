import styled from 'styled-components';

export const PhonebookWrap = styled.div`
  padding: 60px 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 30px;

  background-color: white;
  box-shadow: 10px 10px 53px -22px rgba(0, 0, 0, 0.75);

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

export const Title = styled.h1`
  color: #98ff98;
  text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0),
    1px 0px 0 rgb(0, 0, 0), -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0),
    1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0);

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-family: monospace;
  margin-bottom: 15px;
  & > svg {
    margin-left: 15px;
    stroke: black;
  }
`;

export const ContactsTitle = styled.h2`
  color: #98ff98;
  text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0),
    1px 0px 0 rgb(0, 0, 0), -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0),
    1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0);

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-family: monospace;
  margin-bottom: 15px;
`;
