import { Formik, Form } from "formik";
import { stepOneSchema } from "./validationSchemas";
import InputField from "./InputField";
import "../../ui/form css/workmenForm.css";

const StepOneForm = ( { onNext } ) => {

    return (
        <Formik
            initialValues={ {
                mobile: "",
                email: "",
                company: "",
                pincode: ""
            } }
            validationSchema={ stepOneSchema }
            onSubmit={ ( values ) => {
                console.log( "Step 1 Data:", values );
                onNext( values );
            } }
        >
            <Form className="wc-form">
                <div className="form-header">
                    <h5>Employee’s Compensation Insurance</h5>
                    <span>Step 1 / 2</span>
                </div>
                <div className="wc-row">
                    <InputField name="mobile" label="Mobile Number" />
                    <InputField name="email" label="Email ID" />
                </div>

                <div className="wc-row">
                    <InputField name="company" label="Name of Company" />
                    <InputField name="pincode" label="Pincode" />
                </div>

                <button type="submit" className="wc-btn">
                    Continue
                </button>
            </Form>
        </Formik>
    );
};

export default StepOneForm;
