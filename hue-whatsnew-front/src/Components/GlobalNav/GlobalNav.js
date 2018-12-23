import './GlobalNav.css'
import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import logo from "./logo-img-only.png"

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    appBar: {
      zIndex:theme.zIndex.drawer + 1,
        backgroundColor: '#3a4a52'
    },
    drawer: {
        width: drawerWidth,
      flexShrink:0,
    },
    title: {
        height:64,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64
    },
    sideMenu: {
        marginTop: 64
    },
    paperAnchorLeft: {
        top: 64
    }
});

class GlobalNav extends Component{

    render(){
        const {classes} = this.props;
        // const sideList = (
        //     <div className={classes.list}>
        //         <List>
        //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        //                 <ListItem button key={text}>
        //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        //                     <ListItemText primary={text} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //         <Divider />
        //         <List>
        //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
        //                 <ListItem button key={text}>
        //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        //                     <ListItemText primary={text} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </div>
        // );
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <img src={logo} className="global-brand-img"></img>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            What's New
                        </Typography>
                        <Avatar/>
                    </Toolbar>
                </AppBar>
            </div>



        );
    }

}

GlobalNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlobalNav);