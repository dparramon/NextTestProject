import { object, string } from 'yup';

const validationSchema = object().shape({
    name: string()
        .required("Name is required"),
    email: string().required("Email is required")
});

export default validationSchema;