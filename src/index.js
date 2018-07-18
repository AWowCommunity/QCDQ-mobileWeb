import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { injectGlobal } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import App from './app'

import SwitchSignInAndSignUp  from './switchSignInAndSignUp'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#c8010b",
            contrastText: "#fff"
        },
        secondary: {
            main: "#3f569b",
            contrastText: "#fff"
        },
        default:{
            main:"#fff"
        }
    }
})
injectGlobal`
    html {
    }
    body {
        margin:0;
        padding:0;
    }
    div[class*="MuiInput-underline"]:after {
        border-bottom-color: #c8010b;
    }
    div[class^=InputAdornments-root] div[class^=MuiFormControl-root] label{
        color:#000;
    }
`


render(
    <Provider>
        <MuiThemeProvider theme={theme}>
            <SwitchSignInAndSignUp />
        </MuiThemeProvider>
        {/* <App></App> */}
    </Provider>,
    document.getElementById('root')
)