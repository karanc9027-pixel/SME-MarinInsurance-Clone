import { useState } from "react";
import '../ui/component style/footer.css'
import { GoChevronDown } from "react-icons/go";

const Footer = ( { footer } ) => {
    const [ openIndex, setOpenIndex ] = useState( null );

    const sections = [
        { title: "Products", items: footer.products },
        { title: "Services", items: footer.services },
        { title: "Legal", items: footer.legal },
        { title: "Others", items: footer.others }
    ];

    const toggle = ( index ) => {
        setOpenIndex( openIndex === index ? null : index );
    };

    return (
        <footer className="il-footer">
            {/* TOP */ }
            <div className="footer-top">
                <div className="footer-container">
                    { sections.map( ( section, index ) => (
                        <div className="footer-col" key={ index }>
                            <h4
                                className="footer-title"
                                onClick={ () => toggle( index ) }
                            >
                                { section.title }
                                <span className="footer-arrow">
                                    { openIndex === index ? "" : <GoChevronDown /> }
                                </span>
                            </h4>

                            <ul className={ `footer-links ${ openIndex === index ? "open" : "" }` }>
                                { section.items.map( ( item, i ) => (
                                    <li key={ i }>
                                        <a href="#" onClick={ e => e.preventDefault() }>{ item }</a>
                                    </li>
                                ) ) }
                            </ul>
                        </div>
                    ) ) }
                </div>
            </div>

            {/* BOTTOM */ }
            <div className="footer-bottom">
                <div className="footer-container">
                    <h5>{ footer.company_details.name }</h5>

                    <p>{ footer.company_details.address }</p>
                    <p>Reg. No. { footer.company_details.registration_number }</p>
                    <p>Email: { footer.company_details.email }</p>
                    <p>Fax: { footer.company_details.fax }</p>
                    <p>Contact: { footer.company_details.contact_number }</p>

                    <p className="footer-about">
                        { footer.about_company }
                    </p>

                    <p className="footer-disclaimer">
                        { footer.disclaimer }
                    </p>

                    <p className="footer-cin">
                        CIN: { footer.company_details.cin }
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
