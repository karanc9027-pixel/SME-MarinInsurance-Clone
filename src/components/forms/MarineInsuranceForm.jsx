//run server cmd json-server --watch .\marineFormData.json --port 5001
import '../../ui/form css/Marine Transit Insurance1.css';
import MdWhatsapp from '../../assets/icons/marinePageIcons/watsapp-icon.svg';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    FormGroup,
    Input,
    Row,
    Form as ReactstrapForm,
    Button
} from "reactstrap";

import { useState } from "react";
import { toast } from 'react-toastify';

/* =======================
   STEP 2 COMPONENT
======================= */
const MarineInsuranceForm2 = ( { onBack, step1Data, onSuccess } ) => {

    const [ coverType, setCoverType ] = useState( "single" );
    const [ shipmentType, setShipmentType ] = useState( "domestic" );

    const [ form2, setForm2 ] = useState( {
        commodity: "",
        cargoSum: "",
        currency: "INR",
        customDuty: "",
        previousClaim: "No",
    } );


    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setForm2( prev => ( { ...prev, [ name ]: value } ) );
    };

    const handleSubmit = async () => {
        if ( !form2.commodity || !form2.cargoSum ) {
            alert( "Please fill all required fields." );
            return;
        }

        const finalPayload = {
            ...step1Data,
            ...form2,
            coverType,
            shipmentType,
            createdAt: new Date().toISOString()
        };

        try {
            const res = await axios.post(
                "http://localhost:5001/marineQuotes",
                finalPayload
            );

            console.log( "Saved Data 👉", res.data );
            toast.success( "Submited successfully " );
            // navigate( "/marine-insurance" );
            onSuccess();
        } catch ( error ) {
            console.error( error );
            toast.error( "Error saving data " );
        }
    };


    return (
        <Container className="marine-container">
            <Row className="justify-content-center">
                <Col>
                    <Card className="marine-card">
                        <CardBody>
                            <Button onClick={ onBack } style={ {
                                background: "transparent", border: "none", boxShadow: "none", padding: 0
                            } }
                                onMouseOver={ ( e ) => e.currentTarget.style.background = "transparent" }
                                onFocus={ ( e ) => e.currentTarget.style.boxShadow = "none" }
                            >
                                <IoIosArrowBack style={ { color: 'black' } } size={ 22 } />
                            </Button>
                            {/* HEADER */ }
                            <div className="d-flex justify-content-between align-items-center mb-3">

                                <CardTitle tag="h5">
                                    Marine Transit Insurance</CardTitle>
                                <span className="step-badge">Step 2/2</span>

                            </div>



                            {/* COVER TYPE */ }
                            <div className="cover-tab-list mb-3">
                                <h6>What type of cover do you want?
                                </h6>
                                <Button
                                    color={ coverType === "single" ? "primary" : "light" }
                                    onClick={ () => setCoverType( "single" ) }
                                >
                                    Single Transit
                                </Button>

                                <Button
                                    color={ coverType === "annual" ? "primary" : "light" }
                                    className="ms-2"
                                    onClick={ () => setCoverType( "annual" ) }
                                >
                                    Annual Open
                                </Button>
                            </div>

                            {/* SHIPMENT TYPE */ }
                            <div className="shipment-tabs mb-3">
                                { [ "domestic", "import", "export" ].map( type => (
                                    <Button
                                        key={ type }
                                        outline
                                        color={ shipmentType === type ? "primary" : "secondary" }
                                        className="me-2"
                                        onClick={ () => setShipmentType( type ) }
                                    >
                                        { type.toUpperCase() }
                                    </Button>
                                ) ) }
                            </div>

                            {/* COMMODITY */ }
                            <FormGroup>
                                <Input
                                    name="commodity"
                                    placeholder="Commodity Type"
                                    value={ form2.commodity }
                                    onChange={ handleChange }
                                />
                            </FormGroup>

                            {/* CARGO SUM */ }
                            <FormGroup>
                                <Input
                                    name="cargoSum"
                                    placeholder="Cargo Sum Insured"
                                    value={ form2.cargoSum }
                                    onChange={ handleChange }
                                />
                            </FormGroup>

                            {/* IMPORT / EXPORT ONLY */ }
                            { ( shipmentType === "import" || shipmentType === "export" ) && (
                                <FormGroup>
                                    <Input
                                        name="currency"
                                        type="select"
                                        value={ form2.currency }
                                        onChange={ handleChange }
                                    >
                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </Input>
                                </FormGroup>
                            ) }

                            {/* IMPORT ONLY */ }
                            { shipmentType === "import" && (
                                <FormGroup>
                                    <Input
                                        name="customDuty"
                                        placeholder="Custom Duty"
                                        value={ form2.customDuty }
                                        onChange={ handleChange }
                                    />
                                </FormGroup>
                            ) }

                            {/* ANNUAL OPEN */ }
                            { coverType === "annual" && (
                                <FormGroup>
                                    <Input
                                        name="previousClaim"
                                        type="select"
                                        value={ form2.previousClaim }
                                        onChange={ handleChange }
                                    >
                                        <option>No Previous Claim</option>
                                        <option>Yes – Previous Claim</option>
                                    </Input>
                                </FormGroup>
                            ) }

                            {/* ACTION BUTTONS */ }
                            {/* <Button color="secondary" onClick={ onBack } block className="mb-2">
                                Back
                            </Button> */}
                            {/* <Button onClick={ onBack } className="w-100 " color="light">
                                <IoIosArrowBack /> Back
                            </Button> */}

                            <Button color="primary" block onClick={ handleSubmit }>
                                Buy
                            </Button>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};


/* =======================
   STEP 1 COMPONENT
======================= */
const MarineInsuranceForm = () => {

    const [ step, setStep ] = useState( 1 );

    const [ form, setForm ] = useState( {
        mobile: "",
        email: "",
        company: "",
        pincode: "",
    } );
    const resetForm = () => {
        setStep( 1 );
        setForm( {
            mobile: "",
            email: "",
            company: "",
            pincode: ""
        } );
    };
    const [ touched, setTouched ] = useState( {} );

    const errors = {
        mobile:
            form.mobile.trim().length !== 10
                ? "Please enter valid mobile number"
                : "",

        email:
            !/^\S+@\S+\.\S+$/.test( form.email )
                ? "Please enter valid email address"
                : "",

        company:
            form.company.trim() === ""
                ? "Please enter company name"
                : "",

        pincode:
            form.pincode.length !== 6
                ? "Enter valid pincode"
                : "",
    };

    const isFormValid = Object.values( errors ).every( err => err === "" );

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setForm( prev => ( { ...prev, [ name ]: value } ) );
    };

    const handleBlur = ( { target } ) => {
        setTouched( prev => ( { ...prev, [ target.name ]: true } ) );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        setTouched( {
            mobile: true,
            email: true,
            company: true,
            pincode: true,
        } );

        if ( !isFormValid ) return;

        try {
            const mobileExists = await checkMobileExists( form.mobile );

            if ( mobileExists ) {
                toast.error( "Mobile number already exists" );
                return; //  STOP HERE
            }

            //  MOBILE NOT EXISTS → GO STEP 2
            setStep( 2 );

        } catch ( error ) {
            toast.error( "Unable to verify mobile number" );
        }
    };


    /* =======================
       RENDER
    ======================= */
    return (
        <>
            { step === 1 && (
                <Container className="marine-container">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="marine-card">
                                <CardBody>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <CardTitle tag="h5">Marine Transit Insurance</CardTitle>
                                        <span className="step-badge">Step 1/2</span>
                                    </div>

                                    <ReactstrapForm
                                        className="marine-form-fields"
                                        onSubmit={ handleSubmit }
                                    >

                                        {/* MOBILE */ }
                                        <FormGroup>
                                            <Input
                                                name="mobile"
                                                placeholder="Mobile number"
                                                type="tel"
                                                maxLength={ 10 }
                                                value={ form.mobile }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                            />
                                            { touched.mobile && errors.mobile && (
                                                <div className="error-text">{ errors.mobile }</div>
                                            ) }
                                        </FormGroup>

                                        {/* EMAIL */ }
                                        <FormGroup>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                value={ form.email }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                            />
                                            { touched.email && errors.email && (
                                                <div className="error-text">{ errors.email }</div>
                                            ) }
                                        </FormGroup>

                                        {/* COMPANY */ }
                                        <FormGroup>
                                            <Input
                                                name="company"
                                                placeholder="Name of the company"
                                                value={ form.company }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                            />
                                            { touched.company && errors.company && (
                                                <div className="error-text">{ errors.company }</div>
                                            ) }
                                        </FormGroup>

                                        {/* PINCODE */ }
                                        <FormGroup>
                                            <Input
                                                name="pincode"
                                                placeholder="Pincode"
                                                maxLength={ 6 }
                                                value={ form.pincode }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                            />
                                            { touched.pincode && errors.pincode && (
                                                <div className="error-text">{ errors.pincode }</div>
                                            ) }
                                        </FormGroup>

                                        <Button
                                            type="submit"
                                            className="proceed-btn"
                                            block
                                            disabled={ !isFormValid }
                                        >
                                            Proceed
                                        </Button>

                                    </ReactstrapForm>

                                    <a href="#" className="retrieve-link">Retrieve quote</a>

                                    {/* T&C */ }
                                    <div className="tnc-section">
                                        <label className="tnc-line">
                                            <input type="checkbox" defaultChecked />
                                            I agree to the <a href="#">terms and conditions</a>
                                        </label>

                                        <label className="tnc-line">
                                            <input type="checkbox" defaultChecked />
                                            I want to receive updates on{ " " }
                                            <img
                                                src={ MdWhatsapp }
                                                alt="WhatsApp"
                                                className="whatsapp-icon"
                                            />
                                        </label>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ) }

            { step === 2 && (
                <MarineInsuranceForm2
                    step1Data={ form }
                    onBack={ () => setStep( 1 ) }
                    onSuccess={ resetForm }
                />
            ) }
        </>
    );
};

export default MarineInsuranceForm;
