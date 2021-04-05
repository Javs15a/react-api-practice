import React from 'react'
import { AppBar, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const drawerWidth = 200;

const useStyle = makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

export const DrawerBar = () => {

    let history = useHistory();

    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            {/* AppBar */}
            <AppBar
                position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap>
                        RoboUsers
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {
                            SidebarData.map((item) => {
                                const { title, icon, path } = item;
                                return (
                                    <ListItem key={title} button onClick={() => history.push(path)}>
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            </Drawer>
        </>
    )
}
