import React from 'react'
import { Backdrop, CircularProgress, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

type Props = {
    open: boolean;
    message: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative'
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        label: {
            fontFamily: 'sans-serif',
            fontSize: '2rem !important'
        }
    }),
);


export const Spinner = (props: Props) => {
    const { open, message } = props;
    const classes = useStyles();

    return (
        <div className='app-spinner'>
            <Backdrop className={classes.backdrop} open={open}>
                <Grid container spacing={2} alignContent="center" justify="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <CircularProgress color="inherit" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignContent="center" justify="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className={classes.label}>
                            <p>{message}</p>
                        </div>
                    </Grid>
                </Grid>
            </Backdrop>
        </div>
    );
}
