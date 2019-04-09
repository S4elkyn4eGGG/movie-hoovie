// @flow

import React, {Component} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    Menu,
    MenuItem,
} from "@material-ui/core";
import {KeyboardArrowDown} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {TopMenuStyles} from './styles/TopMenuStyles';

const styles = (theme) => (TopMenuStyles(theme));

type PropsType = {
    classes: Object,
};

type StateType = {
    anchorEl: ?HTMLElement,
};

class TopMenu extends Component<PropsType,StateType> {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar>
                        <Avatar
                            alt="Home"
                            src="/static/images/logo.png"
                            className={classes.menuButton}
                            color="inherit"
                        />
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Movies
                        </Typography>
                        <React.Fragment>
                            <Button
                                focused
                                variant="outlined"
                                className={classes.button}
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <span className={classes.buttonText}>My Account</span>
                                <KeyboardArrowDown className={classes.extendedIcon} />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                className={classes.buttonMenu}
                                disableAutoFocusItem={true}
                            >
                                <MenuItem onClick={this.handleClose}>My Favorite</MenuItem>
                            </Menu>
                        </React.Fragment>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(TopMenu));
