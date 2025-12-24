import { useField } from 'formik';

const InputField = ( { label, ...props } ) => {
    const [ field, meta ] = useField( props );
    return (
        <div>
            <label> { label }</label>
            <input { ...field } { ...props } />
            { meta.touched && meta.error && (
                <div style={ { color: "red" } }>{ meta.error }</div>
            ) }
        </div>
    )
}

export default InputField