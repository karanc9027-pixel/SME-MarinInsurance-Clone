import { useDispatch, useSelector } from "react-redux";
import {
    savePlan,
    prevStep,
    submitGroupHealth,
    resetForm
} from "../../redux/slices/groupHealthSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "../../ui/form css/PlanSelectionThree.css";

const plans = [
    {
        id: "gold",
        name: "Gold",
        sumInsured: "₹1,00,000",
        premium: "₹19,239",
        features: [ "Ambulance ₹1,000", "Room rent 1–2%", "No sub-limit" ]
    },
    {
        id: "platinum",
        name: "Platinum",
        sumInsured: "₹1,00,000",
        premium: "₹1,23,301",
        popular: true,
        features: [
            "Ambulance ₹2,000",
            "Room rent 2–4%",
            "Pre-existing diseases covered"
        ]
    },
    {
        id: "elite",
        name: "Elite",
        sumInsured: "₹1,00,000",
        premium: "₹1,53,023",
        features: [
            "Ambulance ₹3,000",
            "No room rent limit",
            "Maternity covered"
        ]
    }
];

const PlanSelection = () => {
    const dispatch = useDispatch();

    const {
        formData,
        selectedPlan,
        loading,
        success
    } = useSelector( ( state ) => state.groupHealth );

    //  SUCCESS HANDLER
    useEffect( () => {
        if ( success ) {
            toast.success( "Group Health Insurance submitted successfully 🎉" );

            // Reset form & go to first step
            setTimeout( () => {
                dispatch( resetForm() );
            }, 100 );
        }
    }, [ success, dispatch ] );

    const handleBuy = () => {
        if ( !selectedPlan ) {
            toast.error( "Please select a plan" );
            return;
        }

        const payload = {
            ...formData,
            selectedPlan
        };

        dispatch( submitGroupHealth( payload ) );
    };

    return (
        <div className="gh-container">
            {/* LEFT SUMMARY */ }
            <div className="gh-summary">
                <span className="back" onClick={ () => dispatch( prevStep() ) }>
                    ← Back
                </span>

                <h4>Group Health Insurance</h4>

                <ul>
                    <li><span>Name of Corporate</span>{ formData.company }</li>
                    <li><span>Pincode</span>{ formData.pincode }</li>
                    <li><span>Email</span>{ formData.email }</li>
                    <li><span>Mobile Number</span>{ formData.mobile }</li>
                    <li><span>Number of Lives</span>{ formData.employees }</li>
                    <li><span>Family Definition</span>{ formData.familyDefinition }</li>
                    <li><span>Sum Insured</span>{ formData.sumInsured }</li>
                </ul>
            </div>

            {/* RIGHT CONTENT */ }
            <div className="gh-card">
                <h3>Pick a plan that’s best for you.</h3>

                <div className="plans">
                    { plans.map( ( plan ) => (
                        <div
                            key={ plan.id }
                            className={ `plan-card ${ plan.popular ? "popular" : ""
                                } ${ selectedPlan?.id === plan.id ? "active" : "" }` }
                            onClick={ () => dispatch( savePlan( plan ) ) }
                        >
                            <h4>{ plan.name }</h4>
                            <p className="sum">{ plan.sumInsured }</p>

                            <ul>
                                { plan.features.map( ( f, i ) => (
                                    <li key={ i }>{ f }</li>
                                ) ) }
                            </ul>

                            <div className="premium">
                                Total Premium
                                <strong>{ plan.premium }</strong>
                            </div>
                        </div>
                    ) ) }
                </div>

                { selectedPlan && (
                    <div className="bottom-bar">
                        <span>
                            Total Premium <strong>{ selectedPlan.premium }</strong>
                        </span>
                        <button
                            className="buy-btn"
                            onClick={ handleBuy }
                            disabled={ loading }
                        >
                            { loading ? "Submitting..." : "Buy Now" }
                        </button>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default PlanSelection;
