import React from 'react'
import { Button } from '@mui/material'

type Props = {}

const Categories = (props: Props) => {
    return (
        <>
            <Button color="inherit">Nature</Button>
            <Button color="inherit">People</Button>
            <Button color="inherit">Trips</Button>
            <Button color="inherit">Animals</Button>
            <Button color="inherit">Fashion</Button>
            <Button color="inherit">Tech</Button>
        </>
    )
}

export default Categories
