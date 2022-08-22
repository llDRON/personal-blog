import React from 'react'
import { Container, AppBar, Toolbar, Typography } from '@mui/material'
import Menu from 'components/Menu/Menu'
import Categories from 'components/Categories/Categories'
import Logo from 'components/Logo/Logo'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SearchIcon from '@mui/icons-material/Search'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Logo />
                    <SearchIcon />
                    <Menu />
                    <Typography sx={{ flexGrow: 1 }}></Typography>
                    <Categories />
                    <MoreHorizIcon fontSize="large" />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
