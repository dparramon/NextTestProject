import { ChangeEvent, ComponentType, FunctionComponent, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { FormikProps, withFormik } from 'formik';
import { IFormValues } from './Formik/@types/data';
import initialValues from './Formik/intialValues';
import validationSchema from './Formik/validationSchema';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FileItem } from './FileExplorer/FileItem';
import {PressEvent} from "@react-types/shared";


const VALID_FILE_TYPES = [
    'doc',
    'pdf'
];

const TestForm: FunctionComponent<FormikProps<IFormValues>> = ({
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
  }) => {
    const [formikData, setFormikData ] = useState(values);
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    useMemo(() => {
        setFormikData(values);
    }, [values]);

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(!event.target.files) {
            return null;
        }
        setFiles([...event.target.files]);
    }

    const handleSelectMedia = (e:PressEvent) => {
        fileUploadRef.current?.click();
    };

    const handleClearMedia = () => {
        setFiles([]);
    };

    return (
        <form className="flex flex-col items-center justify-between w-full  gap-2">
            <Card className='rounded-md'>
                <CardHeader className='bg-accentGray text-accentLightGray'>
                    <h1 className="text-md">
                        Please Select a file
                    </h1>
                </CardHeader>
                <CardBody className='bg-slate-100 text-slate-900 p-0'>
                    <ul className='flex flex-col gap-2'>
                        {files.map((file, index) => (
                            <li key={index}><FileItem file={file}/></li>
                        ))}
                    </ul>
                </CardBody>
                <CardFooter className='bg-slate-400 text-slate-900'>
                    <ButtonGroup className='flex gap-4'>
                        <Button className='border-gray-100 border-solid border' variant="solid" color="secondary" radius='md' onPress={handleSelectMedia}>
                            Add File
                        </Button>
                        <Button className='border-gray-100 border-solid border' color="warning" onPress={handleClearMedia}>
                            Remove all Files
                        </Button>
                    </ButtonGroup>
                    <label htmlFor='fileUpload' aria-hidden='true' className='sr-only'>
                        File upload
                    </label>
                    <input
                        ref={fileUploadRef}
                        type='file'
                        className='sr-only'
                        id='fileUpload'
                        name='fileUpload'
                        accept={VALID_FILE_TYPES.join()}
                        multiple
                        aria-hidden='true'
                        tabIndex={-1}
                        onChange={handleFileInputChange}
                    />
                </CardFooter>
            </Card>

            {/* <fieldset className="flex p-2 bg-gray-900 justify-between  w-full flex-col gap-2">
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
            </fieldset> */}
        </form>
    )
};

export const TestFormWithFormik: ComponentType<IFormValues> = withFormik<IFormValues, IFormValues>({
    mapPropsToValues: initialValues,
    validationSchema: validationSchema,
    handleSubmit: console.log
})(TestForm);
