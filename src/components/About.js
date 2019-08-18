import React from 'react'
import styled from 'styled-components'
import * as colors from './colors'


const Container = styled.div`
    margin: 0;
    background-color: ${colors.brown};
    font-family: 'Teko';
    font-size: 1.5rem;
`

const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    margin: 0 15rem;
    margin-top: 9rem;
    padding: 4rem 5rem;
    background-color: ${colors.white}; 
`

export default () => (
    <Container>
        <InnerContainer>
            <div style={{margin: '3rem'}}>
            <h2 style={{margin: '0'}}>Black Coyote Products</h2>
            <p>Duis nostrud laborum pariatur laborum nisi excepteur veniam ad est pariatur occaecat voluptate. Eu cupidatat dolore veniam laborum enim Lorem do amet laborum sunt irure pariatur consectetur sunt. Laborum quis tempor aliquip labore ex. Consequat consectetur anim do culpa.

Ex veniam consectetur id deserunt minim enim. Sint irure voluptate proident ut adipisicing duis aliquip dolor reprehenderit enim Lorem laboris tempor. Amet Lorem ipsum consectetur do minim ipsum reprehenderit. Dolore nisi elit tempor voluptate est esse in irure. In nisi do in do reprehenderit velit laborum eu anim. Aliquip enim sunt consequat magna non Lorem laboris est id commodo magna ut exercitation minim.

Anim culpa id dolor labore consequat minim adipisicing eu aliquip non ad. Minim voluptate occaecat ex ipsum laboris mollit aliquip occaecat in et Lorem aliquip reprehenderit. Ad id deserunt minim consequat aliquip exercitation irure reprehenderit. Excepteur ex pariatur consectetur reprehenderit. Minim officia cillum labore quis laborum.

Enim sit deserunt amet aute dolore amet ullamco magna. Nostrud tempor eu sint culpa pariatur Lorem qui non ut consequat amet. Eu cillum minim aliqua proident eiusmod aliquip culpa ullamco nulla dolore. Commodo tempor in officia aute do. Elit sit labore ex adipisicing labore nisi cillum nisi laboris tempor veniam eiusmod.</p>
            </div>
            <div>
                <img style={{margin: "3rem", 'border-radius': "2rem" }} src="https://www.tulsagiftbaskets.com/i/Oklahoma/fullsizeoutput_17c.jpeg"/>
            </div>
        </InnerContainer>
    </Container>
)