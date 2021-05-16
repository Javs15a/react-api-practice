import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, createStyles, Fab, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { getAllCategorias } from 'services/categoria';
import { CategoriaResponse } from './categoria/models/CategoryResponse';
import { ProductoList } from './producto/views/ProductoList';
import { Spinner } from 'components/common/Spinner';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        heading: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: theme.typography.fontWeightRegular,
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
    }),
);

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export const Productos = () => {
    const classes = useStyles();
    const [categorias, setCategorias] = React.useState<Array<CategoriaResponse>>([]);
    const [showSpinner, setShowSpinner] = React.useState<boolean>(false);

    React.useEffect(() => {
        setShowSpinner(true);
        getAllCategorias().then(response => {
            console.log(response);
            setCategorias(response);
            setShowSpinner(false);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <div className="ProductosMain">

            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Categor&iacute;as
                        </Typography>
                        <div className={classes.root}>
                            {
                                categorias.length > 0 ? (
                                    categorias.map(category => (
                                        <Accordion key={`accordion-key-${category.id}`}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel-content-${category.id}`}
                                                id={`panel-header-${category.id}`}
                                            >
                                                <Typography className={classes.heading}>{category.nombre}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ProductoList
                                                    key={`list-key-products-${category.id}`}
                                                    productos={category.articulos ? category.articulos : []}
                                                />
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                )
                                    : (
                                        <Alert severity="info">No hay categor&iacute;as para mostrar!</Alert>
                                    )
                            }
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>

            {
                showSpinner &&
                <Spinner
                    open={showSpinner}
                    message="Cargando"
                />
            }
        </div>
    )
}
