import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Tables from "../app/tables"
import Logo from "./logo.jpeg"
const Container = styled.div``
const Header = styled.div`
    width: 100vw;
    height: 60px;
    background-color: #ff5722;
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

class SwitchSignInAndSignUp extends Component {
    render() {
        return (
            <Container>
                <LogoBox />
                <Tables />
            </Container>
        )
    }
}

export default SwitchSignInAndSignUp
