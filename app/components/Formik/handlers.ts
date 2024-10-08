import { InferType } from "yup";
import validationSchema from "./validationSchema";

const handleSubmit = (
    { name, email }: InferType<typeof validationSchema>
) => {
    console.log(name, email);
};

export default handleSubmit;