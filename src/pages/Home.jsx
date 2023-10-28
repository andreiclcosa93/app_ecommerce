import React from "react";
import Layout from '../components/Layout';

function Home() {
    return (
        <div>
            <Layout>
                <h1>Home</h1>
                <button className="btn btn-danger mx-5">X</button>
            </Layout>
        </div>
    );
}

export default Home;