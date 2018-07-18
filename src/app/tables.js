import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Login from '../signIn'
import SignUp from '../signUp'

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
    center:{
        display:'flex',
        justifyContent:'center'
    }
})

class SimpleTabs extends React.Component {
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
            <div className={classes.root}>
                <div>
                    <Tabs value={value} onChange={this.handleChange} className={classes.center}>
                        <Tab label="登录" />
                        <Tab label="注册" />
                    </Tabs>
                </div>
                {value === 0 && <TabContainer>
                    <Login></Login>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <SignUp></SignUp>
                </TabContainer>}
            </div>
        )
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTabs)
