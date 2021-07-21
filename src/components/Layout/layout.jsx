import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
   return {
        root: {
            display: 'flex',
        },
        layout: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            backgroundColor: 'pink'
        },
        title: {
            padding: theme.spacing(2)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        header: {
            flexGrow: 1
        }
    }
})

const Layout = ({ children }) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/' 
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create' 
        }
    ]

    return (
        <div className={classes.root}>
            <AppBar 
            color='inherit'
            className={classes.appBar}
            elevation={1}
            >
                <Toolbar>
                    <Typography className={classes.header}>
                        Notes creation and display app.
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                </Toolbar>
            </AppBar>


            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                  }}           
            >
            <div>
                <Typography className={classes.title}>
                    Notes application
                </Typography>
            </div>
            <List>
                {menuItems.map((item) => (
                    <ListItem 
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                ))}
            </List>
            </Drawer>

            <div className={classes.layout}>
                <div className={classes.toolbar}></div>
                    {children}
            </div>
        </div>
    )
}

export default Layout
