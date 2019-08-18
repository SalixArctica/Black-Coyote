import React from 'react'
import styled from 'styled-components'
import * as colors from './colors.json'
import jerky from '../images/jerky.png'

const Container = styled.div`
    position: relative;
    background-color: ${colors.red};
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 60vh;
    max-height: 90vh;
    font-family: 'Teko';
    text-align: center;
    font-size: 5rem;
    clip-path: polygon(0% 0%, 100% 0, 100% 90%, 50% 100%, 0 90%);
    margin-bottom: -10%;

    
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url("https://artvast.com/wp-content/uploads/2017/11/preview-mountainscape-16-France.jpg");
        background-size: 100%;
        background-attachment: fixed;
        background-position: bottom right; 
        filter: grayscale(100%);
        z-index: 0;
        opacity: 0.2;
    }
    /* adds little transitional triangle to bottom of banner
    &:after {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        bottom: -4rem;
        z-index: 5;
        margin-left: 50%;
        transform: translate(-50%, 0);

        border-left: 20rem solid transparent;
        border-right: 20rem solid transparent;
  
        border-top: 4rem solid ${colors.red};
    }
    */
`;

const Styledh1 = styled.h1`
    margin: -4rem;
    color: white;
`

const Styledh4 = styled.h4`
    margin: 0;
`

const StyledImg = styled.img`
    width: 70vw;
    position: absolute;
    top: 2rem;
    left: -20rem;
    z-index: 1;
`

const StyledButton = styled.button`
    background: ${colors.beige};
    font-size: 3rem;
    font-family: inherit;
    padding: 1rem 4rem;
    border: none;
    border-radius: 1rem; 
    cursor: pointer;
`



export default ({ data }) => (
    <Container>
        <div style={{margin: 'auto', zIndex: '2'}}>
            <Styledh4>OKLAHOMA MADE</Styledh4>
            <Styledh1>BEEF JERKY</Styledh1>
            <Styledh4>NATURAL WOOD SMOKED</Styledh4>
            <StyledButton>Shop Now</StyledButton>
        </div>
        <div style={{overflow: 'hidden', position: 'relative'}}>
            <StyledImg src="https://www.pngfind.com/pngs/b/29-293944_clip-art-stock-howling-wolf-silhouette-png-clip.png"/>
        </div>
        
    </Container>
)

