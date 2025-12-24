import * as Yup from "yup";

export const stepOneSchema = Yup.object().shape( {
    mobile: Yup.string()
        .matches( /^[6-9]\d{9}$/, "Enter valid 10 digit mobile number" )
        .required( "Mobile number is required" ),

    pincode: Yup.string()
        .length( 6, "Pincode must be 6 digits" )
        .required( "Pincode is required" ),

    company: Yup.string()
        .required( "Company name is required" ),

    email: Yup.string()
        .email( "Invalid email address" )
        .required( "Email is required" ),

    terms: Yup.boolean()
        .oneOf( [ true ], "You must accept terms" ),
} );
export const stepTwoSchema = Yup.object().shape( {
    company: Yup.string().required( "Required" ),
    employees: Yup.number().min( 1 ).required( "Required" )
} );
