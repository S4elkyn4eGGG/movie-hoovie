import {mainTheme} from '../../../theme';

export const TopMenuStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 5,
        }
    },
    buttonMenu: {
        marginTop: 40
    },
    appBar: {
        backgroundColor: mainTheme.mainMenuColor,
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    button: {
        color: mainTheme.lightGrow,
        borderColor: mainTheme.lightGrow,
        textTransform: "none",
        "&:focus": {
            outline: "none",
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: 1,
            width: 40,
            height: 40,
        }
    },
    buttonText: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    extendedIcon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 32,
            color: '#fff'
        },
        fontSize: 26,
    },
});