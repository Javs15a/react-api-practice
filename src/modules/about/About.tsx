import { Button, Container, Grid, Link, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export const About = () => {

    const classes = useStyles();
    let history = useHistory();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        About
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        CRUD de Usuarios creados aleatoriamente con la herramienta <Link href="https://www.mockaroo.com/">Mockaroo</Link>, con el fin de tener una base de datos Inicial para la obtención de datos.
                        La API REST a la que se hacen Request a través de AXIOS está creada en NodeJs en conjunto con Express.
                     </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => history.push('/')}>
                                    Lista de RoboUsers
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={() => history.push('/new')}>
                                    Crear nuevo RoboUser
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    )
}
