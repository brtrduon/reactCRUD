import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        // the line above allows us to not have to write out 'meta.touched' and/or 'meta.error' in the line below (as well as any lines of code below that uses the same 'syntax' (? not sure if that's the best way to phrase that))
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
            <label>{field.label}</label>
                <input
                className='form-control'
                    type='text'
                    {...field.input}
                    // this syntax prevents us from needing to input multiple onChange functions
                />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
            // note: 'touched' refers to the three form/field states (i.e. pristine, touched, and invalid)
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Title'
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
            // so field functions similarly to 'input' in plain HTML?
        );
    }
}

function validate(values) {
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    // if errors is empty, the form is fine to submit
    // if errors has ANY properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);