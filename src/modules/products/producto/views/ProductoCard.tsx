import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import noImg from 'assets/images/no-photo.svg';
import { ProductoResponse } from '../models/ProductoResponse'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 'auto',
        },
    }),
);

type Props = {
    producto: ProductoResponse;
    handleClick: any;
}

export const ProductoCard = (props: Props) => {

    const classes = useStyles();
    const { producto, handleClick } = props;

    return (
        <div className="ProductoCard">
            <Card className={classes.root}>
                <CardActionArea onClick={() => handleClick(producto)}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={producto.img ? producto.img : noImg}
                        title={producto.codigo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle2">
                            {producto.nombre}
                        </Typography>

                        <Typography variant="caption" color="textSecondary" component="p">
                            {producto.descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* Buttons */}
                <CardActions disableSpacing>
                    <IconButton aria-label="edit">
                        <Edit />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <Delete />
                    </IconButton>

                </CardActions>
            </Card>
        </div>
    )
}
