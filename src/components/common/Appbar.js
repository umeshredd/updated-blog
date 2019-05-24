import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
    const {
        title
    } = this.props
    return ( <
        div >
        <
        AppBar position = 'relative' >
        <
        Toolbar >
        <
        Typography variant = "title"
        color = "inherit" > {
            title
        } <
        /Typography> < /
        Toolbar > <
        /AppBar> < /
        div >
    )
}

export default Navbar