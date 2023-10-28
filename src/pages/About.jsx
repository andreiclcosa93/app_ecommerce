import React from "react";
import Layout from '../components/Layout';

function About() {
    return (
        <div>
            <Layout>
                <h1> My About </h1>
                <p className="text-warning">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore accusamus nobis hic consectetur doloremque maxime dolor eos magni reprehenderit.</p>
                <button className="btn btn-danger mx-5">X</button>
            </Layout>
        </div>
    );
}

export default About;