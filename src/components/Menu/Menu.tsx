import React from 'react'
import { Button } from '@mui/material'
import './Menu.css'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button className="menu-button" color="inherit">
                About
            </Button>
            <Button className="menu-button" color="inherit">
                Cooperation
            </Button>
            <Button className="menu-button" color="inherit">
                Contact
            </Button>
        </>
    )
}

export default Menu
