import * as Yup from "yup";

export const stepOneSchema = Yup.object( {
    mobile: Yup.string()
        .matches( /^[0-9]{10}$/, "Invalid mobile number" )
        .required( "Mobile is required" ),

    email: Yup.string()
        .email( "Invalid email" )
        .required( "Email is required" ),

    company: Yup.string().required( "Company name is required" ),

    pincode: Yup.string()
        .matches( /^[0-9]{6}$/, "Invalid pincode" )
        .required( "Pincode is required" ),
} );

export const stepTwoSchema = Yup.object( {
    industry: Yup.string().required( "Required" ),

    skilledCount: Yup.number().min( 0 ).required( "Required" ),
    skilledSalary: Yup.number().min( 0 ).required( "Required" ),

    semiSkilledCount: Yup.number().min( 0 ).required( "Required" ),
    semiSkilledSalary: Yup.number().min( 0 ).required( "Required" ),

    unSkilledCount: Yup.number().min( 0 ).required( "Required" ),
    unSkilledSalary: Yup.number().min( 0 ).required( "Required" ),

    policyPeriod: Yup.string().required( "Required" ),
    claimStatus: Yup.string().required( "Required" )
} );