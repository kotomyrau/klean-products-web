import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: #DDBEA9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:88vh;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`
  export const FormContainer = styled.div`
    margin: auto;
    padding: 4vh 2vw;
    text-align: center;
    width: 40vw;
    @media screen and (max-width: 768px) {
      width: 60vw;
      margin-top: 0;
    }
  `