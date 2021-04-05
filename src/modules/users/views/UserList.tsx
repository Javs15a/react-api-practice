import React, { useContext, useEffect, useState } from 'react'
import { Avatar, createStyles, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import CardItem from './CardItem';
import { deleteUser, getAllUsers } from 'services/users/users';
import { User } from '../UserValues';
import CustomModal from 'components/CustomModal';
import { Email, Person, Phone, Today } from '@material-ui/icons';
import UserContext from 'UserContext';
import { useHistory } from 'react-router';

type Props = {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);

export const UserList = (props: Props) => {
    let history = useHistory();

    const classes = useStyles();

    const { updateUser } = useContext(UserContext);
    const [users, setUsers] = useState<User[]>([]);
    const [open, setOpen] = React.useState<boolean>(false);
    const [robot, setRobot] = useState<User>({
        last_name: '',
        first_name: '',
        user_name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        getAllUsers().then(({ data }) => {
            const { usuarios } = data;
            setUsers(usuarios);
        }).catch((err) => {
            console.log(err);
        });

        return () => {
        }

    }, []);

    const handleDelete = (id: string) => {
        deleteUser(id).then(() => {
            setUsers(users.filter((user) => user.uid !== id));
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleClick = (user: User) => {
        setRobot(user);
        setOpen(true);
    }

    const handleUpdate = (user: User) => {
        updateUser(user);
        history.push('/update');
    }

    const handleClose = () => {
        setOpen(false);
    }

    const roboAvatar = (
        <Grid container spacing={2} alignContent="center" justify="center">
            <Avatar alt="RoboUser" src={`${robot.img}`} className={classes.large} />
        </Grid>
    );

    const body = (
        <Grid container spacing={2} alignContent="center" justify="center">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Email />
                    </ListItemIcon>
                    <ListItemText primary={robot.email} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary={robot.user_name} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Phone />
                    </ListItemIcon>
                    <ListItemText primary={robot.phone} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Today />
                    </ListItemIcon>
                    <ListItemText primary={robot.created && robot.created.toString().split('T')[0]} />
                </ListItem>
            </List>
        </Grid>
    );


    return (
        <>
            <Grid container spacing={4}>
                {
                    users.map((user) => {
                        const { uid } = user;
                        return (
                            <Grid item xs={12} sm={3} key={uid} className="animate__animated animate__fadeIn animate__faster">
                                <CardItem
                                    user={user}
                                    handleClick={handleClick}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            { open &&
                <CustomModal
                    title={`${robot.first_name} ${robot.last_name}`}
                    open={open}
                    handleClose={handleClose}
                    node={body}
                    sizeOverride={80}
                    avatar={roboAvatar}
                />
            }
        </>
    )
}
