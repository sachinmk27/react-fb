import React,{ Component } from 'react';
import { connect } from "react-redux";
import { addComment } from "../actions";


export class AddComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleOnKeyPress(event) {
        if (event.key === 'Enter') {
            console.log('Enter pressed');
            this.props.dispatch(addComment(this.props.id, this.state.input))
            this.setState({
                input: ''
            });
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.handleOnChange} onKeyPress={this.handleOnKeyPress} />
            </div>
        );
    }
}


export default connect()(AddComment);