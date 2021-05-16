import React from 'react'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ProductoResponse } from '../models/ProductoResponse'
import { ProductoCard } from './ProductoCard'

type Props = {
    productos: Array<ProductoResponse>;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ProductoList = (props: Props) => {
    const classes = useStyles();
    const { productos } = props;

    const handleClick = () => { };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {
                    productos.length > 0 ? (
                        productos.map(producto => (
                            <Grid item xs={12} sm={3} md={3} key={`producto-key-${producto.id}`}>
                                <ProductoCard
                                    producto={producto}
                                    handleClick={handleClick}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12} sm={12} md={12}>
                            <Alert severity="info">No hay productos en esta categor&iacute;a!</Alert>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
}
