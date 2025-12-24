import { useField } from "formik";

const InputField = ( { label, ...props } ) => {
    const [ field, meta ] = useField( props );

    return (
        <div className="wc-input">
            <input { ...field } { ...props } />
            <label className={ field.value ? "filled" : "" }>{ label }</label>

            { meta.touched && meta.error && (
                <span className="wc-error">{ meta.error }</span>
            ) }
        </div>
    );
};

export default InputField;
