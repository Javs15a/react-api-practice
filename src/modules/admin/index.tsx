import React from 'react'
import { useStyles } from 'assets/theme/dashboard/styles'
import { Grid, Paper } from '@material-ui/core';

export const AdminCompraVenta = () => {

    const classes = useStyles();

    return (
        <div className="AdminCV">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Desde Administracion</h1>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
