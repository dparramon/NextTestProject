import { ComponentType, FormEvent, FunctionComponent, PropsWithChildren, useMemo, useState } from 'react';
import { Formik, FormikProps, withFormik } from 'formik';
import { IFormValues } from './Formik/@types/data';
import initialValues from './Formik/intialValues';
import validationSchema from './Formik/validationSchema';
import { FormikTextField } from './Formik/FormikTextField';

const TestForm: FunctionComponent<FormikProps<IFormValues>> = ({
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
  }) => {
    const [formikData, setFormikData ] = useState(values);

    useMemo(() => {
        setFormikData(values);
    }, [values]);

    return (
        <form className="flex flex-col items-center justify-between w-full  gap-2 ">
            <fieldset className="flex p-2 bg-gray-900 justify-between  w-full flex-col gap-2">
                <h3>Values</h3>
                <pre>
                    { JSON.stringify(formikData, null, '\r\n') }
                </pre>
            </fieldset>
            <fieldset className="flex p-2 bg-gray-900 justify-between  w-full flex-col gap-2">
                <h3>Errors</h3>
                <pre className='text-red'>
                    { JSON.stringify(errors, null, '\r\n') }
                </pre>
            </fieldset>
            <FormikTextField
                value={values.name}
                onChange={handleChange}
                id={'name'}
                type={'text'}
                name={'name'}
                label={'Name'}
            />
            <FormikTextField
                value={values.email}
                onChange={handleChange}
                id={'email'}
                type={'text'}
                name={'email'}
                label={'Email'}
            />
            <fieldset className="flex pt-8 bg-gray-900 justify-center  w-full gap-2">
                <button type="submit" className="bg-primary-900 px-4 py-2 border-gray-300" onClick={() => handleSubmit()}>
                    Submit
                </button>
            </fieldset>
        </form>
    )
};

export const TestFormWithFormik: ComponentType<IFormValues> = withFormik<IFormValues, IFormValues>({
    mapPropsToValues: initialValues,
    validationSchema: validationSchema,
    handleSubmit: console.log
})(TestForm);
