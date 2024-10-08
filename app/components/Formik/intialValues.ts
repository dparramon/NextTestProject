import { IFormValues } from "./@types/data";

const initialValues:(props: IFormValues)=>IFormValues = props => {
    // debugger;
    return {
        name: props.name || "",
        email: props.email || ""
    }
};

export default initialValues;