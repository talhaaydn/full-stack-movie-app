import React, { Component } from "react";
import { Button, Form, Image, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InlineError from "./InlineError";

class NewMovieForm extends Component {
    state = {
        title: '',
        cover: '',
        errors: {}
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    validate = (data) => {
        const {title, cover} = data;
        const errors = {};
        if(!title) errors.title = "Title can't be blank. Please fill the title";
        if(!cover) errors.cover = "Cover can't be blank. Please fill the cover";

        return errors;
    }

    onSubmit = e => {
        e.preventDefault();

        const errors = this.validate(this.state);
        this.setState({ errors });

        if(Object.keys(errors).length === 0){
            this.props.onNewMovieSubmit(this.state);
            this.setState({ title: '', cover: '' });
            
        }
    }    

    render() {
        const { errors } = this.state;
        return(
            <div>     
                {
                    this.props.newMovie.error.response &&
                    <Message negative>
                        <Message.Header>We're Sorry</Message.Header>
                        <p>A problem has occurred</p>
                    </Message>
                }                           
                <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
                    <Form.Field>
                        <label>Title</label>                        
                        <input
                            name='title'
                            value={this.state.title}
                            onChange={this.onChange}
                            placeholder='Title' />    
                        { errors.title && <InlineError message={errors.title} /> }
                    </Form.Field>
                    <Form.Field>
                        <label>Cover URL</label>
                        <input 
                            name='cover'
                            value={this.state.cover}
                            onChange={this.onChange}
                            placeholder='Cover URL' />
                        { errors.cover && <InlineError message={errors.cover} /> }
                    </Form.Field>
                    <Form.Field>
                        <Image src={this.state.cover} size='small' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default NewMovieForm;
