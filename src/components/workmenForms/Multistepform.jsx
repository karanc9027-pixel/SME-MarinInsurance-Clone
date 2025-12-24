import { useState } from "react";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import { toast } from "react-toastify";

const Multistepform = () => {
    const [ step, setStep ] = useState( 1 );
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const [ isSuccess, setIsSuccess ] = useState( false );

    const [ formData, setFormData ] = useState( {
        step1: {},
        step2: {}
    } );

    const submitFinalData = async ( finalData ) => {
        try {
            setIsSubmitting( true );

            //  CHECK MOBILE (SECOND TIME SUBMIT)
            const isMobileExists = await checkMobileExists( finalData.mobile );

            if ( isMobileExists ) {
                toast.error( "Mobile number already exists" );
                return; //  STOP HERE
            }

            // 🚀 FINAL SUBMIT
            const res = await fetch( "http://localhost:5001/workmenQuotes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( finalData ),
            } );

            if ( !res.ok ) {
                throw new Error( "Submit failed" );
            }

            toast.success( "Form submitted successfully" );

            setStep( 1 );
            setFormData( { step1: {}, step2: {} } );

        } catch ( error ) {
            toast.error( "Submission failed. Please try again." );
        } finally {
            setIsSubmitting( false );
        }
    };



    const checkMobileExists = async ( mobile ) => {
        const res = await fetch(
            `http://localhost:5001/workmenQuotes?mobile=${ mobile }`
        );

        if ( !res.ok ) {
            throw new Error( "Mobile check failed" );
        }

        const data = await res.json();

        // if array length > 0 → mobile exists
        return data.length > 0;
    };


    return (
        <div className="multistep-form">

            { step === 1 && (
                <StepOneForm
                    onNext={ ( data ) => {
                        setFormData( ( prev ) => ( { ...prev, step1: data } ) );
                        setStep( 2 );
                    } }
                />
            ) }

            { step === 2 && (
                <StepTwoForm
                    isSubmitting={ isSubmitting }
                    onBack={ () => setStep( 1 ) }
                    onSubmitStepTwo={ ( data ) => {

                        const merged = {
                            ...formData.step1,
                            ...data
                        };

                        setFormData( prev => ( {
                            ...prev,
                            step2: data
                        } ) );

                        submitFinalData( merged ); //  correct
                    } }


                />
            ) }



        </div>
    );
};

export default Multistepform;
