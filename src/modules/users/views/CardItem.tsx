import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Delete, Edit } from '@material-ui/icons';
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography, CardActionArea } from '@material-ui/core';
import { User } from '../UserValues';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 'auto',
        }
    }),
);

type Props = {
    user: User;
    handleUpdate: any;
    handleDelete: any;
    handleClick: any;
}

export default function CardItem(props: Props) {
    const classes = useStyles();
    const { user, handleDelete, handleUpdate, handleClick } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => handleClick(user)}>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={user.img}
                    title={user.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${user.first_name} ${user.last_name}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {user.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* Buttons */}
            <CardActions disableSpacing>
                <IconButton aria-label="edit" onClick={() => handleUpdate(user)}>
                    <Edit />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDelete(user.uid)}>
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
}
