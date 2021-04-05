import React from 'react'
import { FormikErrors, withFormik } from 'formik';
import { User } from './UserValues';
import { InnerForm } from './views/InnerForm';

const REG_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REG_PHON = /\(?\d+\)?[-.\s]?\d+[-.\s]?\d/;

type Props = {
    submitHandler: any;
    user?: User;
}

const FormControl = withFormik<Props, User>({
    mapPropsToValues: props => {

        return {
            first_name: props.user?.first_name || '',
            last_name: props.user?.last_name || '',
            email: props.user?.email || '',
            phone: props.user?.phone || '',
            user_name: props.user?.user_name || ''
        }
    },
    validateOnChange: true,
    validate: (values: User) => {
        let errors: FormikErrors<User> = {};

        if (values.first_name.trim().length < 2) {
            errors.first_name = 'Longitud insuficiente';
        }
        if (values.last_name.trim().length < 2) {
            errors.last_name = 'Longitud insuficiente';
        }
        if ((values.email && !REG_EMAIL.test(values.email)) || values.email.trim().length < 1) {
            errors.email = 'Formato de Email incorrecto';
        }
        if ((values.phone && !REG_PHON.test(values.phone)) || values.phone.trim().length < 1) {
            errors.phone = 'Formato de Tel\u00E9fono incorrecto. Aceptados: (555) 444-6789 | 555-444-6789 | 555.444.6789 | 555 444 6789';
        }
        if (values.user_name.trim().length < 2) {
            errors.user_name = 'Longitud insuficiente';
        }

        return errors;
    },
    handleSubmit: (values, actions) => {
        actions.setSubmitting(false);
        actions.props.submitHandler(values);
    }
})(InnerForm);

export const FormValidators = (props: Props) => {
    const { submitHandler, user } = props;
    return (
        <div className="form-validators">
            <FormControl submitHandler={submitHandler} user={user} />
        </div>
    )
}
