import workmensCPData from '../../constants/workmens-compensation-policy.json'
import '../../ui/pages css/WorkmensCompenstionPolicy.css'
import { useState } from "react";
const EmployeeCompensationFAQ = ( { data } ) => {
    return (
        <section className="section-content faq-section" id="employeeCompFaq">
            <div className="container">
                <div className="row">

                    {/* Left Content */ }
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2 className="faq-title text-center">
                            { workmensCPData.employee_compensation_faq.title }
                        </h2>

                        { workmensCPData.employee_compensation_faq.categories.map( ( cat, ci ) => (
                            <div className="faq-category" key={ ci }>
                                <h3 className="faq-cat-title">{ cat.category }</h3>

                                <div className="faq-list">
                                    { cat.items.map( ( item, qi ) => (
                                        <FAQItem key={ qi } faq={ item } />
                                    ) ) }
                                </div>
                            </div>
                        ) ) }
                    </div>

                </div>
            </div>
        </section>
    );
};

const FAQItem = ( { faq } ) => {
    const [ open, setOpen ] = useState( false );

    return (
        <div className={ `faq-item ${ open ? "open" : "" }` }>
            <button
                type="button"
                className="faq-question"
                onClick={ () => setOpen( !open ) }
            >
                <span className="faq-question-text">{ faq.question }</span>
                <span className="faq-toggle">{ open ? "−" : "+" }</span>
            </button>

            <div
                className="faq-answer-wrapper"
                style={ { display: open ? "block" : "none" } }
            >
                <p className="faq-answer">{ faq.answer }</p>
            </div>
        </div>
    );
};

export default EmployeeCompensationFAQ;
