import React from 'react'
import marineData from '../constants/marineInsurance.json'
import '../ui/component style/popularSerches.css'
const PopularSerches = () => {
    return (
        <div>
            <section className="marine-popular-searches">
                <div className="marine-popular-container">
                    <div className="marine-popular-wrapper">

                        {/* LEFT IMAGE */ }
                        <div className="marine-popular-image">
                            <img
                                src={ marineData.popularSearchesHeadingImage }
                                alt="Popular Searches"
                            />
                        </div>

                        {/* RIGHT CONTENT */ }
                        <div className="marine-popular-content">
                            <h2 className="marine-popular-heading">
                                { marineData.popularSearchesHeading }
                            </h2>

                            <div className="marine-popular-links">
                                { marineData.popularSearches.map( ( item, index ) => (
                                    <a
                                        key={ index }
                                        href="#"
                                        className="marine-popular-link"
                                        onClick={ e => e.preventDefault() }
                                    >
                                        { item }
                                    </a>
                                ) ) }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PopularSerches
