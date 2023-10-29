import React from "react";
import Layout from '../components/Layout';

import HomeCategory from '../components/HomeCategory';

// IMPORT JSON 
import products from '../utils/products.json';
// console.log(products);

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    // imports data from json 
    componentDidMount() {

        const categories = Object.values(products);
        // console.log(categories);
        const categoryNames = Object.keys(products);
        // this.setState({categories: categories})
        this.setState({categories, categoryNames})
    }

    render() {
        //  console.log(this.state);
        return (
            <div>
                <Layout>
                    <div className="container text-center">
                        <div className="row">
                            {
                                this.state.categories.map((category, index) => {
                                    return (
                                        <HomeCategory 
                                            key={index}
                                            image={category.image}
                                            title={category.name}
                                            description={category.description}
                                            routeName={this.state.categoryNames[index]}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </Layout>
            </div>
        );

    }
}

export default Home;