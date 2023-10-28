
import React from "react";

function HomeCategory(props) {

    const {image, title, description} = props;

    return (
        <div className="col-md-4 mb-5">
            <div className="card shadow-lg">

                <img 
                    src={image} 
                    alt="" 
                    className="w-75 mx-auto p-4 shadow-lg mt-4"
                />
                <hr />
                <h2>{title} </h2>
                <p>{description}</p>

            </div>
        </div>
    );
}

export default HomeCategory;