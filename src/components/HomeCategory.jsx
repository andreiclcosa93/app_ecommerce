
import React from "react";
import { Link } from 'react-router-dom';

function HomeCategory(props) {

    const {image, title, description, routeName} = props;

    // console.log(routeName);

    return (
        <div className="col-md-4 mb-5">
            <div className="card shadow-lg">

                <Link to={`/category/${routeName}`}>
                    <img 
                        src={image} 
                        alt="" 
                        className="w-75 mx-auto p-4 shadow-lg mt-4"
                    />
                    <hr />
                    <h2>{title} </h2>
                    <p>{description}</p>
                </Link>

            </div>
        </div>
    );
}

export default HomeCategory;