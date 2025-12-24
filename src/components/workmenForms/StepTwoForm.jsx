import { Formik, Form, Field } from "formik";
import { stepTwoSchema } from "./validationSchemas";
import InputField from "./InputField";
import "../../ui/form css/workmenForm.css";
// import { toast } from "react-toastify";
const StepTwoForm = ( { onBack, isSubmitting, onSubmitStepTwo } ) => {
    return (
        <Formik
            initialValues={ {
                industry: "",
                skilledCount: "",
                skilledSalary: "",
                semiSkilledCount: "",
                semiSkilledSalary: "",
                unSkilledCount: "",
                unSkilledSalary: "",
                policyPeriod: "1",
                claimStatus: "no",
                createdAt: new Date().toISOString()
            } }
            validationSchema={ stepTwoSchema }
            onSubmit={ ( values ) => {
                console.log( "STEP 2 DATA", values );
                onSubmitStepTwo( values );
                // toast.success( "Form submitted successfully!" );

            } }

        >
            { ( { values } ) => (
                <Form className="wc-form" >

                    {/* HEADER */ }
                    <div className="wc-header">
                        <button type="button" className="wc-back" onClick={ onBack }>←</button>
                        <span className="wc-step">Step 2/2</span>
                    </div>

                    {/* INDUSTRY */ }
                    <div className="wc-select">
                        {/* INDUSTRY CATEGORY */ }
                        <div className="wc-select">
                            <label className="wc-select-label">Industry category</label>
                            <Field as="select" name="industry" className="wc-dropdown">
                                <option value="">-- Select Industry --</option>
                                <option value="Builders - construction incl civil constructions">Builders - construction incl civil constructions</option>
                                <option value="Engineering workshop & Fabrication works (up to 9 meters)">Engineering workshop & Fabrication works (up to 9 meters)</option>
                                <option value="Engineering workshop & Fabrication works (Above 9 meters)">Engineering workshop & Fabrication works (Above 9 meters)</option>
                                <option value="Electricity - Power supply">Electricity - Power supply</option>
                                <option value="Cable Laying/installation/erection - shop/yard risk">Cable Laying/installation/erection work - shop/yard risk</option>
                                <option value="Cable Laying/installation/erection - away from shop/yard risk">Cable Laying/installation/erection work - away from shop/yard risk</option>
                                <option value="Painters & Decorators (not builder)">Painters & Decorators (not builder)</option>
                                <option value="Pharma, Chemists & Druggists">Pharma, Chemists & Druggists</option>
                                <option value="Plastic Goods Mfgrs">Plastic Goods Mfgrs</option>
                                <option value="Road Paving, Tarring and Road Making">Road Paving, Tarring and Road Making</option>
                                <option value="Loading and Unloading">Loading and Unloading</option>
                                <option value="Carpenters">Carpenters</option>
                                <option value="Brick and Tile Makers - machinery used">Brick and Tile Makers -Where any machinery is used</option>
                                <option value="Clothing & Underclothing Mfgrs">Clothing & Underclothing Mfgrs</option>
                                <option value="Domestic Servants">Domestic Servants</option>
                                <option value="Paper Mfgr">Paper Mfgr</option>
                                <option value="Steel works - Steel making">Steel works - Steel making</option>
                                <option value="Yarn Production">Yarn Production</option>
                                <option value="Indoor Clerical works">Indoor Clerical works</option>
                                <option value="Hotels - indoor">Hotels - indoor</option>
                                <option value="Commercial Travellers">Commercial Travellers</option>
                                <option value="Caretakers, Durwans, Chowkidars and Gatekeepers">Caretakers, Durwans, Chowkidars and Gatekeepers</option>
                                <option value="Metal Workers">Metal Workers</option>
                            </Field>
                        </div>

                    </div>

                    {/* SKILLED */ }
                    <div className="wc-row">
                        <InputField name="skilledCount" label="Skilled workers" />
                        <InputField name="skilledSalary" label="Salary" />
                    </div>
                    <p className="wc-sub">Total count &nbsp;&nbsp;&nbsp; Per month per worker</p>

                    {/* SEMI SKILLED */ }
                    <div className="wc-row">
                        <InputField name="semiSkilledCount" label="Semi skilled workers" />
                        <InputField name="semiSkilledSalary" label="Salary" />
                    </div>
                    <p className="wc-sub">Total count &nbsp;&nbsp;&nbsp; Per month per worker</p>

                    {/* UNSKILLED */ }
                    <div className="wc-row">
                        <InputField name="unSkilledCount" label="Unskilled workers" />
                        <InputField name="unSkilledSalary" label="Salary" />
                    </div>
                    <p className="wc-sub">Total count &nbsp;&nbsp;&nbsp; Per month per worker</p>


                    {/* POLICY PERIOD */ }
                    <div className="wc-select">
                        <label className="wc-select-label">Policy Period (Months)</label>
                        <Field as="select" name="policyPeriod" className="wc-dropdown">
                            { Array.from( { length: 12 }, ( _, i ) => (
                                <option key={ i + 1 } value={ String( i + 1 ) }>
                                    { i + 1 }
                                </option>
                            ) ) }
                        </Field>
                    </div>


                    {/* CLAIM */ }
                    {/* CLAIM */ }
                    <div className="wc-claim">
                        <p>Did you claim in your last policy?</p>

                        <label className="wc-radio">
                            <Field type="radio" name="claimStatus" value="yes" />
                            Above ₹1 lakh
                        </label>

                        <label className="wc-radio">
                            <Field type="radio" name="claimStatus" value="no" />
                            Nil or below ₹1 lakh
                        </label>
                    </div>


                    {/* CTA */ }
                    <button type="submit" className="wc-btn wc-btn-full" disabled={ isSubmitting }>
                        { isSubmitting ? "Submitting..." : "Proceed to buy" }
                    </button>
                    <a className="wc-link" href="#">Retrieve quote</a>

                </Form>
            ) }
        </Formik>
    );
};

export default StepTwoForm;
