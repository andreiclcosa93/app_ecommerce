import React, { Component } from "react";
import Layout from '../components/Layout';

class Category extends Component {
    render() {
        console.log(this.props);
        // const routeParam = this.props.match.params.categoryName;
        const routeParam = this.props.match && this.props.match.params ? this.props.match.params.categoryName : null;


        return (
            <div>
                <Layout>
                    <h1>{routeParam}</h1>
                </Layout>
            </div>
        );
    }
}

export default Category;