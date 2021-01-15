import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  palette: {
    ...defaultTheme.palette,
  }
})

const Theme = props => <MuiThemeProvider theme={theme} {...props} />

export default Theme
