import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import * as colors from './colors.json';

const Nav = styled.div`
    margin: 0;
    background: ${colors.black};
    color: ${colors.white};
    font-family: 'Teko';
    display: flex;
    position: sticky;
    top: 0;
    z-index: 5;
`;

const Title = styled.h1`
    margin: .5rem 1rem;
`;

const Styledul = styled.ul`
    margin: auto 1rem auto auto;
`;

const Styledli = styled.li`
    display: inline;
    margin: 0 1rem;
    vertical-align: center;
    font-size: 1.5rem;
    color: ${colors.beige};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default () => (
    <Nav>
        <Title>Black Coyote Jerky</Title>
        <Styledul>
            <Styledli><StyledLink to='/about'>About</StyledLink></Styledli>
            <Styledli>Store</Styledli>
            <Styledli>Cart</Styledli>
            <Styledli>Contact</Styledli>
        </Styledul>
    </Nav>
)