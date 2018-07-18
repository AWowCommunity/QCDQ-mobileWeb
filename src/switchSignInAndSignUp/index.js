import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import SignIn from "../signIn"
import SignUp from "../signUp"
import Logo from "./logo.jpeg"

const Container = styled.div``
const Header = styled.div`
    width: 100vw;
    height: 60px;
    background-color: #c8010b;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
`
const LogoBox = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${Logo});
    background-size: 100% 100%;
    margin: 30px auto 0;
`
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    center: {
        display: "flex",
        justifyContent: "center"
    }
})

class SwitchSignInAndSignUp extends Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes } = this.props
        const { value } = this.state
        return (
            <Container>
                <Header>QCDQ</Header>
                <LogoBox />
                <div className={classes.root}>
                    <div>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            className={classes.center}
                        >
                            <Tab label="登录" />
                            <Tab label="注册" />
                        </Tabs>
                    </div>
                    {value === 0 && (
                        <TabContainer>
                            <SignIn />
                        </TabContainer>
                    )}
                    {value === 1 && (
                        <TabContainer>
                            <SignUp />
                        </TabContainer>
                    )}
                </div>
            </Container>
        )
    }
}

SwitchSignInAndSignUp.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(SwitchSignInAndSignUp)
