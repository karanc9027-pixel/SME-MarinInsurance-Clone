import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, prevStep, saveStepData } from "../../redux/slices/groupHealthSlice";
import { stepTwoSchema } from "./validationSchemas";
import InputField from "./InputField";

import '../../ui/form css/GHPStepTwoForm.css'
const initialValues = {
    firstTime: "yes",
    employees: 10,
    familyDefinition: "",
    sumInsured: ""
};

const StepTwoForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={ initialValues }
            enableReinitialize={ false }
            onSubmit={ ( values ) => {
                dispatch( saveStepData( {
                    firstTime: values.firstTime,
                    employees: values.employees,
                    familyDefinition: values.familyDefinition,
                    sumInsured: values.sumInsured
                } ) );
                console.log( "STEP TWO DATA:", values );
                dispatch( nextStep() );

            } }
        >
            { ( { values, setFieldValue, isSubmitting } ) => (
                <Form className="step-two-form">
                    <h3 className="form-title">Employee Details</h3>

                    {/* Radio */ }
                    <div className="radio-group">
                        <label className="radio-option">
                            <Field type="radio" name="firstTime" value="yes" />
                            <span>Yes</span>
                        </label>

                        <label className="radio-option">
                            <Field type="radio" name="firstTime" value="no" />
                            <span>No</span>
                        </label>
                    </div>

                    {/* Counter */ }
                    <div className="counter-group">
                        <label>Number of Employees</label>

                        <div className="counter">
                            <button
                                type="button"
                                onClick={ () =>
                                    setFieldValue( "employees", Math.max( 1, values.employees - 1 ) )
                                }
                            >
                                −
                            </button>

                            <span>{ values.employees }</span>

                            <button
                                type="button"
                                onClick={ () =>
                                    setFieldValue( "employees", values.employees + 1 )
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Selects */ }
                    <div className="select-group">
                        <label>Family Definition</label>
                        <Field as="select" name="familyDefinition">
                            <option value="">Select</option>
                            <option value="Employee Only">Employee Only</option>
                            <option value="Employee + Family">Employee + Family</option>
                        </Field>
                    </div>

                    <div className="select-group">
                        <label>Sum Insured</label>
                        <Field as="select" name="sumInsured">
                            <option value="">Select</option>
                            <option value="200000">₹2,00,000</option>
                            <option value="500000">₹5,00,000</option>
                        </Field>
                    </div>

                    {/* Buttons */ }
                    <div className="button-row">
                        <button
                            type="button"
                            className="back-btn"
                            onClick={ () => dispatch( prevStep() ) }
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            className="continue-btn"
                            disabled={ isSubmitting }
                        >
                            Continue
                        </button>
                    </div>
                </Form>

            ) }
        </Formik>
    );
};

export default StepTwoForm;
