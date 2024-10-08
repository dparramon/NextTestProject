import { FunctionComponent } from 'react';

interface IFormikTextFieldProps {
    id: string;
    type: string;
    name: string;
    value?: string;
    label: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
}
export const FormikTextField: FunctionComponent<IFormikTextFieldProps> = (
    props
) => {
    return (
        <fieldset className="flex p-2 bg-gray-900 justify-between  w-full flex-col gap-2">
            <label 
                htmlFor={props.id} 
            >
                {props.label}
            </label>
            <input
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className="px-4 py-2 text-black"
            />
        </fieldset>
    )
}