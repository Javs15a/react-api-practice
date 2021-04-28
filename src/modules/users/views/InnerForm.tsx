import React from 'react'
import { Avatar, Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { InputText } from 'components/InputText'
import { Field, Form, FormikProps } from 'formik'
import { User } from '../UserValues'

type Props = {}

const useStyles = makeStyles((theme: Theme) => createStyles({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export const InnerForm = (props: Props & FormikProps<User>) => {
    const classes = useStyles();
    const { handleChange, values, errors, isSubmitting } = props;

    return (
        <div className="user-form">
            <Form noValidate >
                <Grid container spacing={2} alignContent="center" justify="center">
                    <Grid item>
                        {/* imagen */}
                        <Avatar
                            alt="Robo user"
                            src={values.img || `https://robohash.org/0${values.first_name}.png?size=200x200&set=set1`}
                            className={classes.large} />
                    </Grid>
                    <Grid item xs={12} sm container direction="column" spacing={2}>

                        <Grid item xs={8} sm={6} md={8}>
                            <Field
                                type="text"
                                id="first_name"
                                component={InputText}
                                change={handleChange}
                                label="Nombre(s)"
                                value={values.first_name}
                                error={!!errors.first_name}
                            />
                            {errors.first_name && `${errors.first_name} `}
                        </Grid>
                        <Grid item xs={8} sm={6} md={8}>
                            <Field
                                type="text"
                                id="last_name"
                                component={InputText}
                                change={handleChange}
                                label="Apellido(s)"
                                value={values.last_name}
                                error={!!errors.last_name}
                            />
                            {errors.last_name && `${errors.last_name} `}
                        </Grid>
                        <Grid item xs={8} sm={6} md={8}>
                            <Field
                                type="email"
                                id="email"
                                component={InputText}
                                change={handleChange}
                                label="Email"
                                value={values.email}
                                error={!!errors.email}
                            />
                            {errors.email && `${errors.email} `}
                        </Grid>
                        <Grid item xs={8} sm={6} md={8}>
                            <Field
                                type="text"
                                id="user_name"
                                component={InputText}
                                change={handleChange}
                                label="Nickname"
                                value={values.user_name}
                                error={!!errors.user_name}
                            />
                            {errors.user_name && `${errors.user_name} `}
                        </Grid>
                        <Grid item xs={8} sm={6} md={8}>
                            <Field
                                type="text"
                                id="phone"
                                component={InputText}
                                change={handleChange}
                                label="Teléfono"
                                value={values.phone}
                                error={!!errors.phone}
                            />
                            {errors.phone && `${errors.phone} `}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row" alignContent="center" justify="center">
                    <Grid item xs={8} sm={6} md={8}>
                        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}
