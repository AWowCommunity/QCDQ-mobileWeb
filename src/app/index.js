import React, { Component } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

const Container = styled.div`
    color: #00a6f3;
    font-size: 28px;
`

class App extends Component {
    render() {
        return (
            <Container>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Container>
        )
    }
}

export default App
