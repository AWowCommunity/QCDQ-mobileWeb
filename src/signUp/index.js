import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from "@material-ui/icons/AccountCircle"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import IconButton from "@material-ui/core/IconButton"
import Email from '@material-ui/icons/Email'
import styled from "styled-components"

const Container = styled.div``
const WrapperBoxInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
`
const WrapperBoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const StyledAornments = styled(InputAdornment)`
    width: 48px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
`
const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit
    }
})

class SignUp extends Component {
    state = {
        account: "",
        password: "",
        email: "",
        showPassword:false,
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value })
    }
    handleMouseDownPassword = event => {
        event.preventDefault()
    }
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }))
    }
    render() {
        const { classes } = this.props
        return (
            <Container>
                <WrapperBoxInput>
                    <FormControl className={classNames(classes.margin)}>
                        <InputLabel htmlFor="adornment-password">
                            账号
                        </InputLabel>
                        <Input
                            id="account"
                            type={"text"}
                            value={this.state.account}
                            onChange={this.handleChange("account")}
                            endAdornment={
                                <StyledAornments position="end">
                                    <AccountCircle />
                                </StyledAornments>
                            }
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin)}>
                        <InputLabel htmlFor="adornment-password">
                            邮箱
                        </InputLabel>
                        <Input
                            id="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                            endAdornment={
                                <StyledAornments position="end">
                                    <Email />
                                </StyledAornments>
                            }
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin)}>
                        <InputLabel htmlFor="adornment-password">
                            密码
                        </InputLabel>
                        <Input
                            id="password"
                            type={this.state.showPassword ? "text" : "password"}
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={
                                            this.handleMouseDownPassword
                                        }
                                    >
                                        {this.state.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                                <Visibility />
                                            )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </WrapperBoxInput>
                <WrapperBoxButton>
                    <Button
                        color="primary"
                        className={classes.button}
                        variant="extendedFab"
                        size="large"
                    >
                        注册
                    </Button>
                </WrapperBoxButton>
            </Container>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)
