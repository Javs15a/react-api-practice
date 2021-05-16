import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { useStyles } from 'assets/theme/dashboard/styles'

export const People = () => {
    const classes = useStyles();

    return (
        <div className="People">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Desde personas</h1>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
