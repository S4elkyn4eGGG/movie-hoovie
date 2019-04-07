import React, {Component} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    MenuList,
    MenuItem,
} from "@material-ui/core";
import {KeyboardArrowDown} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 15,
    },
    appBar: {
        backgroundColor: "#474d59",
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    button: {
        color: "rgb(175,177,184)",
        borderColor: "rgb(175,177,184)",
        textTransform: "none",
        "&:focus": {
            outline: "none",
        },
    },
    extendedIcon: {
        marginLeft: theme.spacing.unit,
        fontSize: 26,
    },
});

class TopMenu extends Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState((state) => ({open: !state.open}));
    };

    handleClose = (event) => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
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
                                buttonRef={(node) => {
                                    this.anchorEl = node;
                                }}
                                variant="outlined"
                                aria-owns={open ? "menu-list-grow" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                                className={classes.button}
                                disableFocusRipple={true}
                                disableRipple={true}
                            >
                                My Account
                                <KeyboardArrowDown className={classes.extendedIcon} />
                            </Button>
                            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                {({TransitionProps}) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{
                                            marginTop: 5,
                                            transformOrigin: "center bottom",
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={this.handleClose}>
                                                <MenuList>
                                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </React.Fragment>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(TopMenu));
