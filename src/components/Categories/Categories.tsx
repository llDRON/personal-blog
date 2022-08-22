import React from 'react'
import { Button } from '@mui/material'
import './Categories.css'

type Props = {}

const Categories = (props: Props) => {
    return (
        <>
            <Button className="cat-btn" color="inherit">
                Nature
            </Button>
            <Button className="cat-btn" color="inherit">
                People
            </Button>
            <Button className="cat-btn" color="inherit">
                Trips
            </Button>
            <Button className="cat-btn" color="inherit">
                Animals
            </Button>
            <Button className="cat-btn" color="inherit">
                Fashion
            </Button>
            <Button className="cat-btn" color="inherit">
                Tech
            </Button>
        </>
    )
}

export default Categories
