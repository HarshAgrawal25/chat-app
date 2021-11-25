import React from 'react'
import { DashboardData, wrtContent, buisness, personal, online } from '../Brain/WorkData/DashboardData'
import Card from '../Brain/UI/Card'    
import { CardsSection } from './CardsElements'
import { Line } from './CardsElements'

const Cards = () => {
    return (
        <React.Fragment>
        <CardsSection>
            {DashboardData.map((data, index) => {
                return (
                    <Card
                key={index}
                id={index}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description} />
                )
            })}
        </CardsSection>
            <Line />
            <CardsSection>
            {wrtContent.map((data, index) => {
                return (
                    <Card
                key={index}
                id={index}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description} />
                )
            })}
        </CardsSection>
        <Line/>
        <CardsSection>
            {buisness.map((data, index) => {
                return (
                    <Card
                key={index}
                id={index}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description} />
                )
            })}
        </CardsSection>
        <Line/>
        <CardsSection>
            {personal.map((data, index) => {
                return (
                    <Card
                key={index}
                id={index}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description} />
                )
            })}
        </CardsSection>
        <Line/>
        <CardsSection>
            {online.map((data, index) => {
                return (
                    <Card
                key={index}
                id={index}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description} />
                )
            })}
        </CardsSection>
        </React.Fragment>
    )
}

export default Cards
