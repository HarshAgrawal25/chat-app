import React from 'react'
import { DashboardData } from '../Brain/WorkData/DashboardData'
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
        </React.Fragment>
    )
}

export default Cards
