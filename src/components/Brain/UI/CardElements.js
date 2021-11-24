import styled from "styled-components";
import { Link } from "react-router-dom";
const primaryColor = "#c3c3c3";
const secondaryColor = "rgb(32,31,31)";


export const MainLink = styled(Link)`
    text-decoration: none;

`;

export const CardContainer = styled.div`
    background-color: ${secondaryColor} ;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 ${primaryColor};
    padding: 5px;
    z-index: -1;
    transform: skewY(-2deg);
    margin: 0 auto;
    max-width: 550px;

    &:hover {
        padding: 0;
    }
`;

export const CardMain = styled.div`
  background-color: white;
  padding: 5px 10px;
  transform: skewY(2deg);
  border-radius: 10px;
  color: black;
  position: relative;

  .fas {
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${secondaryColor};
  }

  &:hover {
    transform: scale(1.02) skewY(2deg);
    border-top: 2px solid black;
  }

  @media screen and (min-width: 600px) {
    display: flex;

    .card-icon {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 25px;
    }

    .fas {
      font-size: 3rem;
      font-weight: 700;
      position: relative;
      top: 0;
      right: 0;
      color: black;
    }
  }
`;

export const MainDiv = styled.div`
    padding: 10px 5px;
    
    .about-main {
        text-transform: uppercase;
        font-size: 1rem;
        padding-bottom: 10px;
    }

    article {
        font-size: 1.1rem;
        font-weight: 600;
        padding-bottom: 5px;
    }


`;