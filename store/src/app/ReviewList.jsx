import React from 'react';
import { Rating } from './Rating';
export const ReviewList = props => <>

    

    

    <ul className = "list-group">
        <h4>Reviews</h4>
        <li className = "list-group-item"></li>
        {
            !props.reviews.length && <li className= "list-group-item">Be the first to add a review!</li>
        }
        {
            props.reviews.map((x,i) => <li className = "card rounded container mb-4 mt-4" key = {i}>
                <div className = "card-header bg-light bg-gradient">
                    <Rating value = {x.rating} />
                </div>
                <div className = "card-body">
                    <div className = "row mt-1 mb-1">
                        <div className = "text-muted clearfix">{x.userName}</div>
                    </div>
                    <div className = "row mt-1 mb-1">
                    <div className = "text-body col-10">
                            <p>"{x.comment}"</p>
                        </div>
                        <div className = " col-2 float-right text-muted">
                            {x.date}
                        </div>
                        
                    </div>
                </div>
                
            </li>)
        }
    </ul>

</>;