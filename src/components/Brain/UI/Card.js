import React from 'react'
import { CardContainer } from './CardElements';
import { CardMain } from './CardElements';
import { MainDiv } from './CardElements';
import { MainLink } from './CardElements';

const Card = (props) => {
    return (
        <MainLink to="/workarea">
          <CardContainer>
            <CardMain>
              <div className="card-icon">
                <i className={props.icon}></i>
              </div>
              <MainDiv>
                <div className="about-main">{props.title}</div>
                <article>{props.subtitle}</article>
                <p>
                  {props.description}
                </p>
              </MainDiv>
            </CardMain>
          </CardContainer>
    </MainLink>
    )
}

export default Card

