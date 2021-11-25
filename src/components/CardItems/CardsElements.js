import styled from "styled-components";

export const CardsSection = styled.section`
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 20px;
    justify-content: center;

    @media screen and (min-width: 850px) {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 4% 7%;
        grid-gap: 30px;
    }
    
    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Line = styled.hr`
    border-top: 2px dashed #c3c3c3;
    padding-bottom: 20px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 90%;
    }
`;