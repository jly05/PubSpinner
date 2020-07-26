import React from 'react'
import { TopBar, PubSpinner } from 'containers'
import { Page } from 'components'
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from 'themes'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
})

const App = () => {
    const classes = useStyles()

    const muiTheme = createMuiTheme(theme)

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />

            <div className={classes.root}>
                <TopBar />
                <Page>
                    <PubSpinner />
                </Page>
            </div>
        </ThemeProvider>
    )
}

export default App
