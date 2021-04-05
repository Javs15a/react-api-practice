import { Button, Card, CardActions, CardContent, CardHeader, createStyles, makeStyles, Modal, Theme } from '@material-ui/core';
import React from 'react'

type Props = {
    title: string;
    open: boolean;
    handleClose: () => void;
    node: JSX.Element;
    sizeOverride?: number;
    avatar?: JSX.Element;
}

function modalStyle(width: number) {
    return {
        width: `${width}%`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        maxWidth: 400,
        position: 'absolute',
        backgroundColor: theme.palette.background.paper
    },
    header: {
        textAlign: 'center',
        fontSize: '2rem !important',
    }
}));

export default function CustomModal(props: Props) {

    const { title, open, handleClose, node, sizeOverride, avatar } = props;
    const [customStyle] = React.useState(modalStyle(sizeOverride ? sizeOverride : 50));
    const classes = useStyles();


    const body = (
        <Card style={customStyle} className={classes.card}>
            <CardHeader
                title={title}
                avatar={
                    avatar
                }
                classes={{ title: classes.header }}
            />
            <CardContent>
                {node}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small" onClick={handleClose}>Cerrar</Button>
            </CardActions>
        </Card>
    );

    return (
        <div className="app-modal">
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    );
}