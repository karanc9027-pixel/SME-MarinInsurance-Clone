import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import PopularSerches from '../components/PopularSerches'
import marineData from '../constants/marineInsurance.json'
import workmensCPData from '../constants/workmens-compensation-policy.json'
// import Header from '../components/Header'
import '../ui/pages css/WorkmensCompenstionPolicy.css'
import firstBanner from '../assets/images/workmens-compensation-policy/wc_banner_new.png'
import Multistepform from '../components/workmenForms/Multistepform'
import EmployeeCompensationFAQ from '../components/Workmens-compensation Component/EmployeeCompensationFAQ'
import StepOneForm from '../components/workmenForms/StepOneForm'



const WorkmensCompensationPolicy = () => {

    const [ activeIndex, setActiveIndex ] = useState( 0 )
    const [ showMore, setShowMore ] = useState( false );

    const {
        title,
        description
    } = workmensCPData.employee_compensation_insurance;

    const {
        titlee,
        legal_liability_covered_under,
        basic_coverage,
        add_on_covers,
        coverage_conditions,
        img
    } = workmensCPData.coverage_details;

    const [ open, setOpen ] = useState( false );

    useEffect( () => {
        const interval = setInterval( () => {
            setActiveIndex( ( prev ) => prev === workmensCPData.slides.length - 1 ? 0 : prev + 1 );
        }, 3000 )

        return () => clearInterval( interval );
    }, [] );
    return (
        <div>
            <section className="wc-hero">
                <div className="wc-hero-container wc-grid">

                    {/* LEFT SECTION */ }
                    <div className="wc-left">
                        <div className="">‹ Back</div>

                        <div className="wc-content">
                            <h1>{ workmensCPData.title }</h1>
                            <p>{ workmensCPData.slides[ activeIndex ].text }</p>

                            <div className="wc-indicators">
                                { workmensCPData.slides.map( ( _, index ) => (
                                    <span
                                        key={ index }
                                        className={ `dot ${ index === activeIndex ? "active" : "" }` }
                                    />
                                ) ) }
                            </div>
                        </div>

                        <div className="wc-illustration">
                            <img
                                src={ workmensCPData.image.src }
                                alt={ workmensCPData.image.alt }
                            />
                        </div>
                    </div>

                    {/* RIGHT SECTION */ }
                    <div className="wc-right">
                        <Multistepform />
                    </div>

                </div>
            </section>
            {/* =============================================================================== */ }
            <section className="section-content workmen">
                <div className="container">
                    <div className="row">
                        <div className="group-sections center-alignment">
                            <h2>{ title }</h2>

                            <div className="pad-top1">
                                <span className="mar-spc">
                                    { description
                                        .slice( 0, showMore ? description.length : 2 )
                                        .map( ( item, index ) => (
                                            <p key={ index }>{ item }</p>
                                        ) ) }
                                </span>

                                { description.length > 2 && (
                                    <span
                                        className="readMore"
                                        onClick={ () => setShowMore( !showMore ) }
                                    >
                                        { showMore ? "Read less" : "Read more" }
                                    </span>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= Employee Compensation Act ================= */ }
            <section className="section-content workmen">
                <div className="container">
                    <div className="row">

                        {/* ===== Content ===== */ }
                        <div className="group-sections center-alignment">
                            <h2>
                                { workmensCPData.employee_compensation_act.title }
                            </h2>

                            <div className="pad-top1">
                                <p>
                                    <strong>
                                        { workmensCPData.employee_compensation_act.act_name }
                                    </strong>{ " " }
                                    is { workmensCPData.employee_compensation_act.overview }
                                </p>

                                <p>The Act is applicable to:</p>
                                <ul>
                                    { workmensCPData.employee_compensation_act.applicable_to.map(
                                        ( item, index ) => (
                                            <li key={ index }>{ item }</li>
                                        )
                                    ) }
                                </ul>

                                <p>Compensation is provided in cases of:</p>
                                <ul>
                                    { workmensCPData.employee_compensation_act.coverage_conditions.map(
                                        ( item, index ) => (
                                            <li key={ index }>{ item }</li>
                                        )
                                    ) }
                                </ul>
                            </div>
                        </div>

                        {/* ===== Table ===== */ }
                        <div className="col-xs-12 text-center">
                            <div className="table_wrapper">
                                <table className="tableWrapp k-table">
                                    <thead>
                                        <tr>
                                            <th>Scenarios</th>
                                            <th>Compensation</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { workmensCPData.compensation_details.map( ( row, index ) => (
                                            <tr key={ index }>
                                                <td>{ row.scenario }</td>
                                                <td>{ row.compensation }</td>
                                            </tr>
                                        ) ) }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ============================================================================== */ }

            <section className="section-content col-reverse">
                <div className="container">
                    <div className="row">

                        {/* Text Content */ }
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 premium_calulation dtch-para">
                            <h2>{ workmensCPData.why_employee_compensation_policy.title }</h2>

                            <p className="pad-top2">{ workmensCPData.why_employee_compensation_policy.description }</p>

                            <ul className="arrow-tab-list">
                                { workmensCPData.why_employee_compensation_policy.reasons.map( ( reason, index ) => (
                                    <li key={ index }>{ reason }</li>
                                ) ) }
                            </ul>
                        </div>

                        {/* Image */ }
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 text-center">
                            <img
                                className="img-responsive"
                                src={ workmensCPData.why_employee_compensation_policy.img.src }
                                alt={ workmensCPData.why_employee_compensation_policy.img.alt }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */ }
            <section className="icici-section icici-image-left">
                <div className="icici-container">
                    <div className="icici-row">

                        {/* Image (Left) */ }
                        <div className="icici-col-image">
                            <img
                                className="icici-img"
                                src={ img.src }
                                alt={ img.alt }
                            />
                        </div>

                        {/* Content (Right) */ }
                        <div className="icici-col-content">
                            <h2 className="icici-title">{ titlee }</h2>

                            {/* Legal Liability Description */ }
                            { legal_liability_covered_under.map( ( text, index ) => (
                                <p key={ index } className="icici-para">
                                    { text }
                                </p>
                            ) ) }

                            {/* Basic Coverage */ }
                            <h3 className="icici-subtitle">Basic Coverage</h3>
                            <ul className="icici-list">
                                { basic_coverage.map( ( item, index ) => (
                                    <li key={ index }>{ item }</li>
                                ) ) }
                            </ul>

                            {/* Add-on Covers */ }
                            <h3 className="icici-subtitle">Add-on Covers</h3>
                            <ul className="icici-list">
                                { add_on_covers.map( ( item, index ) => (
                                    <li key={ index }>{ item }</li>
                                ) ) }
                            </ul>

                            {/* Coverage Conditions */ }
                            <h3 className="icici-subtitle">Coverage Conditions</h3>
                            <ul className="icici-list">
                                { coverage_conditions.map( ( item, index ) => (
                                    <li key={ index }>{ item }</li>
                                ) ) }
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            {/* ==================================================================================== */ }
            <section className="icici-adv-section">
                <div className="icici-adv-container">

                    {/* Title */ }
                    <div className="icici-adv-title">
                        <h2>{ workmensCPData.policy_advantages.title }</h2>
                    </div>

                    {/* Cards */ }
                    <div className="icici-adv-grid">
                        { workmensCPData.policy_advantages.advantages.map( ( item, index ) => (
                            <div key={ index } className="icici-adv-card">

                                {/* Icon */ }
                                <div className="icici-adv-icon">
                                    <img
                                        src={ item.icon }
                                        alt={ item.heading }
                                    />
                                </div>

                                {/* Content */ }
                                <div className="icici-adv-content">
                                    <h3>{ item.heading }</h3>
                                    <p>{ item.description }</p>
                                </div>

                            </div>
                        ) ) }
                    </div>

                </div>
            </section>
            {/* ============================================ */ }
            <section className="icici-eligibility-section">
                <div className="icici-eligibility-container">

                    <div className="icici-eligibility-row">

                        {/* Image */ }
                        <div className="icici-eligibility-image">
                            <img
                                src={ workmensCPData.eligibility.icon.src }
                                alt={ workmensCPData.eligibility.icon.alt }
                            />
                        </div>

                        {/* Content */ }
                        <div className="icici-eligibility-content">
                            <h2>{ workmensCPData.eligibility.title }</h2>

                            <ul className="icici-arrow-list">
                                { workmensCPData.eligibility.eligible_entities.map( ( item, index ) => (
                                    <li key={ index }>{ item }</li>
                                ) ) }
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            {/* ==================================================== */ }
            <section className="icici-whybuy-section" id="Saveonpremium1">
                <div className="icici-whybuy-container">
                    <div className="icici-whybuy-row">

                        {/* Content */ }
                        <div className="icici-whybuy-content">
                            <h2>{ workmensCPData.why_buy_policy.title }</h2>

                            <p className="icici-whybuy-desc">
                                <strong>{ workmensCPData.why_buy_policy.description }</strong>
                            </p>

                            <ul className="icici-arrow-list">
                                { workmensCPData.why_buy_policy.key_points.map( ( point, index ) => (
                                    <li key={ index }>{ point }</li>
                                ) ) }
                            </ul>
                        </div>

                        {/* Image */ }
                        <div className="icici-whybuy-image">
                            <img
                                src={ workmensCPData.why_buy_policy.icon }
                                alt="Why buy Employee’s Compensation Insurance"
                                title="ICICI Lombard workmen's compensation insurance"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* =========================================== */ }
            <section className="icici-howbuy-section">
                <div className="icici-howbuy-container">
                    <div className="icici-howbuy-row">

                        {/* Content */ }
                        <div className="icici-howbuy-content">
                            <h2>{ workmensCPData.how_to_buy_policy.title }</h2>

                            <p className="icici-howbuy-intro">
                                Here’s how you can buy Employee’s Compensation Insurance online:
                            </p>

                            <ul className="icici-tick-list">
                                { workmensCPData.how_to_buy_policy.steps.map( ( step, index ) => (
                                    <li key={ index }>{ step }</li>
                                ) ) }
                            </ul>

                            <p className="icici-howbuy-note">
                                You can also take the help of our responsive and intelligent assistant, <strong>RIA</strong>,
                                or fill out our <strong>Request a callback</strong> form to get assistance from our executives.
                            </p>

                            <p className="icici-howbuy-email">
                                You can also write to us at{ " " }
                                <strong>businessinsurance@icicilombard.com</strong> to know more about the policy and buying process.
                            </p>
                        </div>

                        {/* Image */ }
                        <div className="icici-howbuy-image">
                            <img
                                src={ workmensCPData.how_to_buy_policy.icon }
                                alt="How to Buy Employee’s Compensation Insurance"
                                title="ICICI Lombard Employee's Compensation Insurance"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* =============================== */ }
            <section className="icici-docs-section" id="Saveonpremium">
                <div className="icici-docs-container">
                    <div className="icici-docs-row">

                        {/* Content */ }
                        <div className="icici-docs-content">
                            <h2>{ workmensCPData.documents_required.title }</h2>

                            <p className="icici-docs-subtitle">
                                <strong>{ workmensCPData.documents_required.subtitle }</strong>
                            </p>

                            <ul className="icici-arrow-list">
                                { workmensCPData.documents_required.documents.map( ( doc, index ) => (
                                    <li key={ index }>{ doc }</li>
                                ) ) }
                            </ul>
                        </div>

                        {/* Image */ }
                        <div className="icici-docs-image">
                            <img
                                src={ workmensCPData.documents_required.icon }
                                alt="Workmen compensation insurance documents"
                                title="ICICI Lombard workmen's compensation insurance"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* ================================================ */ }
            <section className="icici-articles-section">
                <div className="icici-articles-container">

                    <h2 className="icici-articles-title">
                        { workmensCPData.insurance_articles.ttitle }
                    </h2>

                    <div className="icici-articles-list">
                        { workmensCPData.insurance_articles.articles.map( ( article, index ) => (
                            <div className="icici-article-card" key={ index }>
                                <h3>{ article.ttitle }</h3>

                                <p className="icici-article-desc">
                                    { article.description }
                                </p>

                                <span className="icici-article-date">
                                    { article.date }
                                </span>
                            </div>
                        ) ) }
                    </div>

                    {/* CTA */ }
                    <div className="icici-articles-cta">
                        <a
                            href={ workmensCPData.insurance_articles.cta.link }
                            className="icici-btn"
                        >
                            { workmensCPData.insurance_articles.cta.text }
                        </a>
                    </div>

                </div>
            </section>

            {/* ===================================================================== */ }
            <EmployeeCompensationFAQ />
            {/* ================================================================================ */ }

            <section className="products-code-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="table_wrapper pro-code-wrap">
                                <table className="tableWrapp k-table">
                                    <thead>
                                        <tr>
                                            { workmensCPData.product_codes.headers.map( ( head, i ) => (
                                                <th key={ i }>{ head }</th>
                                            ) ) }
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { workmensCPData.product_codes.rows.map( ( row, i ) => (
                                            <tr key={ i }>
                                                <td>{ row.product }</td>
                                                <td>{ row.product_code }</td>
                                                <td>{ row.retail_uin }</td>
                                                <td>{ row.commercial_uin }</td>
                                            </tr>
                                        ) ) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================================================== */ }
            <PopularSerches />
            <Footer footer={ marineData.footer } />
        </div>
    )
}

export default WorkmensCompensationPolicy