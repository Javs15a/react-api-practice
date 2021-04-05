import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react'

type Props = {
    id: string;
    value: string;
    label: string;
    error: boolean;
    change: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
}

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            error: {
                backgroundColor: '#FDE8E8'
            },
            errorlabel: {
                color: 'black !important'
            }
        }
    )
);

export const InputText = (props: Props) => {
    const classes = useStyles();
    const { id, value, label, error, change } = props;

    return (
        <div className='app-input'>
            <TextField
                fullWidth
                id={id}
                variant='outlined'
                size='small'
                label={label}
                onChange={change}
                error={error}
                InputProps={
                    {
                        classes: {
                            error: classes.error
                        }
                    }
                }
                value={value}
            />
        </div>
    );
}
