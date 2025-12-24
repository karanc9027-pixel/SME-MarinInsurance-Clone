import '../ui/pages css/Group_Health_Insurance.css'
import GHI from '../constants/Group_Health_Insurance.json'
import StepOneForm from '../components/GroupHealthQuotes/StepOneForm';
import GroupHealthPage from '../components/GroupHealthQuotes/GroupHealthPage'
const Group_Health_Insurance = () => {
    const data = GHI.groupHealthBannerData;
    return (
        <div>
            <section className="health-banners">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="heading1">{ data.title }</h1>
                        </div>
                    </div>

                    <div className="row group-healths">
                        {/* LEFT CONTENT */ }
                        <div className="col-lg-8 col-md-8 col-sm-12 lists-rules">
                            <div className="health-rules">
                                <ul>
                                    { data.highlights.map( ( item, index ) => (
                                        <li key={ index }>
                                            <img
                                                src={ item.icon }
                                                alt={ data.title }
                                                className="img-fluid"
                                            />
                                            <span>{ item.text }</span>
                                        </li>
                                    ) ) }
                                </ul>

                                <div className="policy-issue">
                                    <ul>
                                        { data.stats.map( ( stat, index ) => (
                                            <li key={ index }>
                                                <span>{ stat.value }</span>
                                                <p>{ stat.label }</p>
                                            </li>
                                        ) ) }
                                    </ul>

                                    <p className="dates pt-5">{ data.statsNote }</p>
                                </div>
                            </div>
                        </div>

                        {/* EXISTING CUSTOMER CTA */ }
                        <div className="existing-customer-image">
                            <img
                                src={ data.existingCustomer.image }
                                alt="Existing Customer"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-lg-8 col-md-12 right-form-col">
                            <GroupHealthPage />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Group_Health_Insurance