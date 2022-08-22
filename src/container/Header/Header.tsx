import React from 'react'
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from 'components/Menu/Menu'
import Categories from 'components/Categories/Categories'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    Blog template
                    <IconButton
                        size="small"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Categories />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
