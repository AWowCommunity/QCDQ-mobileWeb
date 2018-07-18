import React, { Component, Fragment } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import AccountCircle from "@material-ui/icons/AccountCircle"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3
    },
    textField: {
        flexBasis: 300
    },
    button: {
        margin: theme.spacing.unit
    }
})
const Container = styled.div``
const StyledAornments = styled(InputAdornment)`
    width: 48px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
`
const WrapperBoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const WrapperBoxInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
`
const WrapperBoxSwitch = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    line-height: 48px;
`
const ForgetBox = styled.div``

const Atage = styled.a`
    text-decoration:none;
    color: #000;
`
class InputAdornments extends Component {
    state = {
        account: "",
        password: "",
        showPassword: false,
        checkedA: true
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
    handleChangeSwitch = name => event => {
        this.setState({ [name]: event.target.checked })
    }
    render() {
        const { classes } = this.props
        return (
            <Container>
                <WrapperBoxInput>
                    <FormControl className={classNames(classes.margin)}>
                        <InputLabel htmlFor="adornment-account">
                            账号
                        </InputLabel>
                        <Input
                            id="adornment-account"
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
                            密码
                        </InputLabel>
                        <Input
                            id="adornment-password"
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
                    <WrapperBoxSwitch>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChangeSwitch(
                                        "checkedA"
                                    )}
                                    value="checkedA"
                                    color="primary"
                                />
                            }
                            label="记住密码"
                        />
                        <ForgetBox>
                            <Atage href="#">
                                忘记密码?
                            </Atage>
                        </ForgetBox>
                    </WrapperBoxSwitch>
                </WrapperBoxInput>
                <WrapperBoxButton>
                    <Button
                        color="primary"
                        className={classes.button}
                        variant="extendedFab"
                        size="large"
                    >
                        登 录
                    </Button>
                </WrapperBoxButton>
            </Container>
        )
    }
}

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InputAdornments)
