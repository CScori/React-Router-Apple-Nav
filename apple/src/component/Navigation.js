import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
height: 150px;
backdround-color: 3A393C;
text-color: 3A393C;
font-family: 'Raleway', sans-serif;
`

const Navigation = () => {
    return (
        <Nav>
            <ul>
               <li><NavLink>:apple_logo:</NavLink></li>
               <li><NavLink>Mac</NavLink></li>
               <li><NavLink>iPad</NavLink></li>
               <li><NavLink>iPhone</NavLink></li>
               <li><NavLink>Watch</NavLink></li>
               <li><NavLink>TV</NavLink></li>
               <li><NavLink>Music</NavLink></li>
               <li><NavLink>Support</NavLink></li>
               <li><NavLink>:mag:</NavLink></li>
               <li><NavLink>:briefcase:</NavLink></li>
            </ul>
            
        </Nav>
    )
}

export default Navigation
