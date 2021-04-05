import React, { useContext } from 'react'
import { Container, Divider, Toolbar, Typography } from '@material-ui/core'
import { User } from '../UserValues'
import { FormValidators } from '../FormValidators'
import { Spinner } from 'components/Spinner'
import { createUser, updateUser } from 'services/users/users'
import UserContext from 'UserContext'

type Props = {
    action: string;
    user?: User;
}


export const UserForm = (props: Props) => {
    const { action: title } = props;
    const [showSpinner, setShowSpinner] = React.useState<boolean>(false);
    const { user } = useContext(UserContext)

    const submitHandler = (values: User) => {
        setShowSpinner(true);
        console.log(values);

        switch (title) {
            case 'Nuevo':

                createUser(values).then((response) => {
                    console.log(response);
                    setShowSpinner(false);
                }).catch((err) => {
                    console.log(err);
                });
                break;
            case 'Editar':
                updateUser(values, user.uid || '').then((response) => {
                    console.log(response);
                    setShowSpinner(false);
                }).catch((err) => {
                    console.log(err);

                });
                break;
        }
    }

    return (
        <div>
            <Typography variant="h2">
                {title}
            </Typography>
            <Divider />
            <Toolbar />
            <Container >
                {
                    (user && title === 'Editar')
                        ? <FormValidators submitHandler={submitHandler} user={user} />
                        : <FormValidators submitHandler={submitHandler} />
                }
            </Container>
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
