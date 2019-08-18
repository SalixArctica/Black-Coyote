import React from "react"
import Nav from './Nav'
import './Layout.css';

export default ({ children }) => (
    <div>
        <Nav/>
        { children }
    </div>
);