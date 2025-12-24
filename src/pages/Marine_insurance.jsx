// import Header from "../components/Header";
import "../ui/pages css/marin_insurance.css"; // Keep CSS import only
import marineData from '../constants/marineInsurance.json'
import marketLeader from "../assets/icons/marinePageIcons/social_leaderboard.svg";
import PopularSerches from "../components/PopularSerches";
import Footer from "../components/Footer";
import MarineInsuranceForm from "../components/forms/MarineInsuranceForm";

function Marine_insurance () {
  const featureData = marineData.features[ 0 ];
  const { whoShouldBuy: w } = marineData;
  const [ meta, ...items ] = marineData.coverage;
  const [ notCov, ...itemss ] = marineData.notCovered
  const { faqHeading, faq } = marineData;
  return (
    <div>
      {/* --------Header-------- */ }
      {/* <Header /> */ }

      {/* Marine Insurance Section */ }
      <section className="marine-banner section-wrap">
        <div className="container">

          {/* Left Block */ }
          <div className="marine-left">
            <h1 className="marine-title">{ marineData.title }</h1>

            {/* Stats */ }
            <div className="marine-stats">
              { marineData.stats.map( ( item, index ) => (
                <div className="stat-wrapper" key={ index }>
                  <div className="stat-box">
                    <h3 className="stat-number">{ item.value }</h3>
                    <p className="stat-label">{ item.label }</p>
                  </div>

                  {/* Show separator except after last item */ }
                  {/* { index !== marineData.stats.length - 1 && (
                    <div className="stat-sep"></div>
                  ) } */}
                </div>
              ) ) }

              {/* marine-market-leader section */ }
              <div className="marine-market-leader">
                <img src={ marketLeader } alt="Market Leader" />

                <p className="market-text">
                  { marineData.marketLeader.text }
                  <sup>{ marineData.marketLeader.sup }</sup>
                </p>
              </div>

            </div>





            {/* Benefit List */ }
            <ul className="benefit-list">
              { marineData.benefits.map( ( item, index ) => (
                <li className="benefit-item" key={ index }>
                  <div className="benefit-icon">
                    <img
                      src={ item.icon }
                      alt={ 'No items' }
                    />
                  </div>

                  <p className="benefit-text">
                    { item.description }
                  </p>
                </li>
              ) ) }
            </ul>


            <div className="note-fy">
              <p># as on FY 2023</p>
              <p>* as on FY 2019-2024</p>
            </div>
          </div>
          {/* ============================================== */ }
          {/* Right Block */ }
          <div className="marine-right">
            <MarineInsuranceForm />
            <div className="right-bg">
              {/* ====================================================== */ }
            </div>
          </div>

        </div>
      </section>


      {/* ============================================ */ }
      <section className="marine-what section">
        <div className="container">
          { marineData.WhatMarin.map( ( info, i ) => (
            <div className="row what-row" key={ i }>
              <div className="col text-col">
                <h2 className="section-title">{ info.title }</h2>
                <p className="section-text">{ info.paragraph }</p>
              </div>

              <div className="col img-col">
                <img src={ info.image } alt={ info.title } className="marine-img" />
              </div>
            </div>
          ) ) }

        </div>
      </section>


      {/* <!-- ------------------ WHY MARINE INSURANCE SECTION ------------------ --> */ }

      {/* <!-- ============================
     MARINE INSURANCE SECTION
============================= --> */}
      <section className="marine-section">

        {/* <!-- What is Marine Insurance --> */ }



        {/* <!-- Why Marine Insurance Is Important --> */ }
        <div className="marine-why container">
          <h2 class="marine-title center">{ marineData.whyImportantHeadingCenter.whyImportantHeading }</h2>
          <p class="marine-subtitle center">
            { marineData.whyImportantHeadingCenter.whyImportantDescription }
          </p>

          <div className="marine-benefits-grid">

            { marineData.whyImportant.map( ( info, i ) => (
              <div class="marine-benefit-item" key={ i }>
                <img src={ info.icon } alt="YOUR_ICON" class="marine-benefit-icon" />
                <h3 class="marine-benefit-title">{ info.title }</h3>
                <p class="marine-benefit-text">{ info.description }</p>
              </div>
            ) ) }


          </div>
        </div>
      </section>

      {/* ============================== */ }
      <section className="marine-section-bg">
        <div className="container how-work">

          <div className="row">

            {/* LEFT IMAGE */ }
            <div className="col img-col">
              <img src={ marineData.howWork.image } alt={ marineData.howWork.title } />
            </div>

            {/* RIGHT TEXT */ }
            <div className="col text-col">
              <h2>{ marineData.howWork.title }</h2>
              <p className="sub-heading">{ marineData.howWork.subtitle }</p>

              <ul className="work-list">
                { marineData.howWork.steps.map( ( step, i ) => (
                  <li key={ i }>
                    <img
                      src={ marineData.howWork.icon }
                      alt="tick"
                      className="work-icon"
                    />
                    <span>{ step }</span>
                  </li>
                ) ) }
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========ds============================= */ }
      <section className="section-wrapp bg-blue">
        <div className="container">

          <h2 className="heading2 clr-white align-center">
            { featureData.featuresTitle }
          </h2>

          <p className="sub-txt clr-white feature-marine-sub-text align-center">
            { featureData.featuresSubtitle }
          </p>

          <ul className="features-grid">
            { featureData.features.map( ( feature ) => (
              <li className="feature-block-item" key={ feature.id }>
                <div className="no-txt">{ feature.id }</div>
                <div className="features-cont">
                  <p className="block-title">{ feature.title }</p>
                  <p className="block-desc">{ feature.description }</p>
                </div>
              </li>
            ) ) }
          </ul>


        </div>
      </section>


      {/* ================================================ */ }

      <section className="marine-section">
        {/* <!-- What is Marine Insurance --> */ }
        {/* <!-- Why Marine Insurance Is Important --> */ }
        <div className="marine-why container">
          {/* Heading + Subtitle */ }
          <h2 className="marine-title center">
            { marineData.typesOfPolicies[ 0 ].typesOMIPolicy }
          </h2>

          <p className="marine-subtitle center">
            { marineData.typesOfPolicies[ 0 ].typesOMIDescreption }
          </p>

          {/* Grid Items */ }
          <div className="marine-benefits-grid">
            { marineData.typesOfPolicies.slice( 1 ).map( ( item, index ) => (
              <div className="marine-benefit-item" key={ index }>
                <img src={ item.icon } alt="sd" />
                {/* Only title + description since you do not have icons */ }
                <h3 className="marine-benefit-title">{ item.title }</h3>
                <p className="marine-benefit-text">{ item.description }</p>
              </div>
            ) ) }
          </div>
        </div>
      </section>


      {/* ================================================ */ }
      <section className="marine-should-buy">
        <div className="marine-container">
          <div className="marine-content">

            {/* LEFT */ }
            <div className="marine-text">
              <h2>{ w.title }</h2>
              <p>{ w.description }</p>

              <ul className="marine-list">
                { w.list.map( ( item, i ) => (
                  <li key={ i }>{ item }</li>
                ) ) }
              </ul>
            </div>

            {/* RIGHT */ }
            <div className="marine-image">
              <img src={ w.img } alt="Who Should Buy Marine Insurance" />
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================/ */ }

      <section className="marine-covered">
        <div className="marine-container">

          <h2 className="center">{ meta.title }</h2>
          <p className="center">{ meta.description }</p>

          <div className="marine-covered-grid">
            <ul className="marine-list">
              { items.slice( 0, 8 ).map( ( item, i ) => (
                <li key={ i }>{ item }</li>
              ) ) }
            </ul>

            <ul className="marine-list">
              { items.slice( 8 ).map( ( item, i ) => (
                <li key={ i }>{ item }</li>
              ) ) }
            </ul>
          </div>

        </div>
      </section>
      {/* =============================================== */ }
      <section className="marine-exclude-section">
        <div className="marine-exclude-container">
          <div className="marine-exclude-wrapper">

            {/* LEFT CONTENT */ }
            <div className="marine-exclude-text">
              <h2 className="marine-exclude-title">{ notCov.title }</h2>
              <p className="marine-exclude-subtitle">{ notCov.description }</p>

              <ul className="marine-exclude-list">
                { items.map( ( item, i ) => (
                  <li key={ i } className="marine-exclude-list-item">
                    { item }
                  </li>
                ) ) }
              </ul>
            </div>

            {/* RIGHT IMAGE */ }
            <div className="marine-exclude-image-box">
              <img
                src={ notCov.BImg }
                alt="Not covered in marine insurance"
                className="marine-exclude-image"
              />
            </div>

          </div>
        </div>
      </section>
      {/* ============================================== */ }
      <section className="marine-blog-cards">
        <h2 className="marine-blog-heading">
          { marineData.blogs[ 0 ].heading }
        </h2>

        <div className="marine-blog-grid">
          { marineData.blogs.map( ( blog, index ) => (
            <div className="marine-blog-card" key={ index }>
              <div className="marine-blog-image">
                <img src={ blog.img } alt={ blog.title } />
              </div>
              <div className="marine-blog-body">
                <p className="marine-blog-title">{ blog.title }</p>
                <span className="marine-blog-cta">{ blog.cta }</span>
              </div>
            </div>
          ) ) }
        </div>

        {/* BUTTON BELOW GRID */ }
        <div className="marine-blog-btn-wrapper">
          <button className="icici-btn">
            Read more
          </button>
        </div>
      </section>
      {/* =============================================== */ }

      <section className="marine-faq">
        <div className="marine-faq-container">
          <h2 className="marine-faq-heading">
            { faq.heading }
          </h2>

          <div className="marine-faq-list">
            { faq.items.map( ( item ) => (
              <div className="marine-faq-item" key={ item.id }>
                <h3 className="marine-faq-question">
                  <span>{ item.id }.</span> { item.question }
                </h3>
                <p className="marine-faq-answer">
                  { item.answer }
                </p>
              </div>
            ) ) }
          </div>
        </div>
      </section>

      {/* ========================Popular Searches component============================= */ }

      <PopularSerches />

      {/* ======================Footer=============================== */ }
      <Footer footer={ marineData.footer } />
    </div>
  );
}

export default Marine_insurance;
