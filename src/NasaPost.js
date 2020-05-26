import React from "react";

const NasaPost = (props) => {
    const { apod } = props

    return(
        <div className="main--container">
            <div className="column--half">
                <h2>{apod.title}</h2>
                <img src={apod.hdurl} alt="Nasa image of the day" />
                <span>{apod.copyright}</span>
            </div>
            <div className="column--half">
                <p>{apod.explanation}</p>
                <span>{apod.date}</span>
            </div>
        </div>
    );
}

export default NasaPost;
