import React from "react";

const NasaPost = (props) => {
    const { apods } = props;

    if (!apods.url) {
        return <h3 className="loading">Loading...</h3>;
    } else {
        return(
            <div className="main--container">
                <section className="title--section">
                <h2 className="nasa--title">{apods.title}</h2>
                </section>
                
                <div className="column--half">
                    <img className="image-of-the-day" src={apods.url} alt="Nasa image of the day" />
                    <span className="optional-info">{apods.copyright}</span>
                </div>
                <div className="column--half">
                    <p>{apods.explanation}</p>
                    <span className="optional-info">{apods.date}</span>
                </div>
            </div>
        );
    }
}

export default NasaPost;
