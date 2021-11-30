import React from 'react'
import styled from 'styled-components'
import Section from '../Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg= 'model-s.jpg'
                leftBtnTxt= 'Custom Order'
                rightBtnTxt = 'Existing Inventory'
            />
            <Section
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg= 'model-y.jpg'
                leftBtnTxt= 'Custom Order'
                rightBtnTxt = 'Existing Inventory'
            />
            <Section
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg= 'model-3.jpg'
                leftBtnTxt= 'Custom Order'
                rightBtnTxt = 'Existing Inventory'
            />
            <Section
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg= 'model-x.jpg'
                leftBtnTxt= 'Custom Order'
                rightBtnTxt = 'Existing Inventory'
            />
            <Section
                title="Lower Cost Panels in America"
                description="Money back guarantee"
                backgroundImg= 'solar-panel.jpg'
                leftBtnTxt= 'Order Now'
                rightBtnTxt = 'Learn More'
            />
            <Section
                title="Solar New Roof"
                description="Solar Roof costs Less than a New Roof"
                backgroundImg= 'solar-roof.jpg'
                leftBtnTxt= 'Order Now'
                rightBtnTxt = 'Learn More'
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg= 'accessories.jpg'
                leftBtnTxt= 'Order Now'
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`