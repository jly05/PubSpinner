import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, Typography, AppBar, IconButton } from '@material-ui/core'
import BarIcon from '@material-ui/icons/LocalBar'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const TopBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <BarIcon className="mr-4" />

                <Typography variant="h6" className={classes.title}>
                    Pub Spinner
                </Typography>
                <IconButton
                    href="https://github.com/jamie-lynch/pub-spinner"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
