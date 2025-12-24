import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, saveStepData } from "../../redux/slices/groupHealthSlice";
import { stepOneSchema } from "./validationSchemas";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import useCheckMobile from "../../hooks/useCheckMobile";
import '../../ui/form css/GHPStepOneForm.css'

const StepOneForm = () => {
    const dispatch = useDispatch();
    const checkMobile = useCheckMobile();

    const toastShownRef = useRef( false );
    const [ loading, setLoading ] = useState( false );

    const handleSubmit = async ( values ) => {
        console.log( "STEP ONE DATA:", values );

        if ( loading ) return;

        setLoading( true );
        toastShownRef.current = false;

        const exists = await checkMobile( values.mobile );

        if ( exists ) {
            if ( !toastShownRef.current ) {
                toast.error( "Mobile number already exists" );
                toastShownRef.current = true;
            }
            setLoading( false );
            return;
        }

        dispatch(
            saveStepData( {
                company: values.company,
                pincode: values.pincode,
                email: values.email,
                mobile: values.mobile,
            } )
        );

        dispatch( nextStep() );
        setLoading( false );
    };


    return (
        <Formik
            initialValues={ {
                mobile: "",
                pincode: "",
                company: "",
                email: "",
                terms: true,
                updates: true,
            } }
            validationSchema={ stepOneSchema }
            onSubmit={ handleSubmit }
        // onSubmit={ ( { handleSubmit }, values ) => {
        //     console.log( values );
        // } }
        >
            <Form className="icici-form">

                {/* Row 1 */ }
                <div className="form-row">
                    <InputField
                        name="mobile"
                        type="text"
                        placeholder="Mobile Number"
                    />
                    <InputField
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                    />
                </div>

                {/* Corporate Name */ }
                <div className="form-row single">
                    <InputField
                        name="company"
                        type="text"
                        placeholder="Name of corporate"
                    />
                </div>

                {/* Email */ }
                <div className="form-row single">
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>

                {/* Button */ }
                <button type="submit" className="form-submit-btn" disabled={ loading }>
                    { loading ? "Please wait..." : "Continue" }
                </button>

                {/* Retrieve Quote */ }
                <div className="retrieve-link">
                    Retrieve quote
                </div>

                {/* Checkboxes */ }
                <div className="checkbox-group">
                    <label>
                        <Field type="checkbox" name="terms" />
                        I agree to the <span>terms and conditions</span>
                    </label>

                    <label>
                        <Field type="checkbox" name="updates" />
                        I want to receive updates on
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                        />
                        WhatsApp
                    </label>
                </div>

            </Form>
        </Formik>
    );
};

export default StepOneForm;
