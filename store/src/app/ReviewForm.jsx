import React from 'react';
import { Rating } from './Rating';

export class ReviewForm extends React.Component{
    
    state = {
        
        userName: '',
        rating: 0,
        comment:  '',
        date: new Date().toString().split('G')[0]
    }
    values = [
        1,
        2,
        3,
        4,
        5
    ]
    onSubmit(){
        this.props.onReviewAdded(this.state);
        this.setState({
            userName: '',
            rating: '',
            comment: '',
            date: new Date().toString().split('G')[0]
        });
    }
    
    render() {
        return <>
            <form className = "card">
            <div className = "card-header bg-secondary text-light">
                Add Review
            </div>
            <div className = "card-body">
            <div class="row">
                <div class="col-6">
                    <label for ="userName">Your Name</label>
                    <input
                        type = "text"
                        name = "userName"
                        id = "userName"
                        className = "form-control"
                        value = {this.state.userName}
                        onChange = { event => this.setState({userName:event.target.value})} />
                </div>
                <div class="col-4">
                    <label for = "ratingSelect">Rating</label>
                    <select name = "rating" id = "rating" className = "form-control" value = {this.state.rating} onChange = {event => this.setState({rating: event.target.value})}>
                        <option></option>{
                            this.values.map(x => <option>{x}</option>)
                        }
                    </select>
                </div>
                <div class="col-2">Stars<br></br>
                    <Rating value = {this.state.rating} />
                </div>
            </div>
            <div class="row">
                <div class="col-12">Comment<br></br>
                    
                    <textarea name = "comment" id = "comment" className = "form-control" value = {this.state.comment} onChange = {event => this.setState({comment: event.target.value})}>                             
                    </textarea>
                </div>
            </div>
            <div class="row mt-4 mb-4">
                <div class="col-12">
                    
                    <button onClick = {()=>this.onSubmit()} type = "button" class = "btn btn-secondary">Submit</button>
                </div>
            </div> 
            </div>                
            </form>
        </>
    }

}