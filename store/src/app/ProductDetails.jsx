
import React from 'react';
import { Product } from '../models';
import { ProductReview } from '../models';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

export class ProductDetails extends React.Component{
    state = {
        product: new Product(
            1,
            "Jif Peanut Butter, 40 ounce",
            "7g of Protein per serving with no preservatives, artifical flavors or colors.",
            7.99,
            "https://johnlawrimore.com/smu/101.png",
            []
        )
    }
    updateState() {

    }
    addReview(review) {
        
        var reviews = this.state.product.reviews;
        reviews.push(review);
        this.setState({reviews});
    }

    render() {
        return <>
            <div className = "row mt-4 mb-4">
                <div className = "container">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>
                </ol>
                </nav>
                </div>
            </div>
            <div className = "jumbotron container">
                <div className = "row">
                    <div className = "float-right">
                        <img src = {this.state.product.imageUrl}></img>
                    </div>
                    <div className = "col-6">
                        <h1>{this.state.product.name}</h1>
                        <span className = "badge badge-primary">{this.state.product.price}</span>
                        <h4>{this.state.product.description}</h4>
                    </div>
                </div>
                
            </div>
            <h3>Product Reviews ({this.state.product.reviews.length})</h3>
            <ReviewList reviews = {this.state.product.reviews} />
            <ReviewForm onReviewAdded = {review => this.addReview(review)} />
        </>
    }

}