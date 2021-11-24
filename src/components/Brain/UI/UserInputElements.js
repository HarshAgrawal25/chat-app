import styled from 'styled-components'


const primaryColor= '#c3c3c3';
const secondaryColor = 'rgb(32,31,31)';


export const UserInputSection = styled.div`
  max-height: 600px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 550px) {
    border-radius: 10px;
  }
`;

export const AboutDiv = styled.div`
    display: flex;
    padding:  2% 2%;
    margin: 25px 0 15px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 12px;
  background-color: ${primaryColor};
  border-radius: 50%;
  color: white;

  .fas {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 768px) {
    background-color: ${secondaryColor};
  }
`;


export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const HeadingText = styled.p`
     font-size: 1.2rem;
     font-weight: 700;
`;

export const SpanText = styled.span`
  font-size: 1rem;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px ;

  label {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${secondaryColor};
    padding-bottom: 10px;
  }

  div {
    background-color: white;
    position: absolute;
    top: 37px;
    right: 40px;
  }

  input {
    padding: 12px;
    border: 1px solid ${primaryColor};
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
  }

  span {
    color: ${primaryColor};
    font-size: 0.8rem;
    padding: 8px 0;
  }
`;


export const TextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${secondaryColor};
    padding: 15px 15px 0;
  }

  div {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px 0;
  }

  textarea {
    padding: 12px;
    background-color : ${primaryColor};
    font-size: 1rem;
    resize: none;
    overflow: hidden;
    outline: none;
  }

  span {
    color: ${primaryColor};
    font-size: 0.8rem;
    padding: 8px 0;
  }

  .text-area-span {
    padding: 15px;
  }
`;

export const ButtonDiv = styled.div`
  padding: 15px ;

.open-brain-btn {
  background-image: linear-gradient(
    to right,
    #5f2c82 0%,
    #49a09d 51%,
    #5f2c82 100%
  );
}
.open-brain-btn {
  padding: 17px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  border: none;
  font-size: $text-font;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  letter-spacing: 0.1rem;
}

.open-brain-btn:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
`;



