import { Box, Button, TextField } from '@mui/material';
import Header from '../../components/Header';   
import * as yup from 'yup';
import { Formik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';

const Formfields = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: ''
};
const Form = () => {  

    const isNonMobile = useMediaQuery("(min-width:600px)");    


    const handleFormSubmit = () => {
        return (values, { resetForm }) => {
            console.log(values);
            resetForm();    
        };
    }

    const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    const FieldValidation = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Email is not valid').required('Email is required'),
        contact: yup.string().matches(phoneRegExp, "phone number is not valid").required('Contact Number is required'),
        address1: yup.string().required('Address is required'),
        address2: yup.string().required('Address is required')
    }); 

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Formik
                initialValues={Formfields}
                validationSchema={FieldValidation}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="email"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}  
                            />
                        </Box>
                        <Box mt="20px">
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained"
                                fullWidth
                            >
                                Create User
                            </Button>   
                        </Box>
                    </form>
                )}
            </Formik>   
        </Box>
    );
    

    
}

export default Form;
